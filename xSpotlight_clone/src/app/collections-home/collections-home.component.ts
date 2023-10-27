import { Component } from '@angular/core';
import { CollectionsHomeService } from './collections-home.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { NftDetailsComponent } from '../nft-details/nft-details.component';

@Component({
  selector: 'app-collections-home',
  templateUrl: './collections-home.component.html',
  styleUrls: ['./collections-home.component.css'],
})
export class CollectionsHomeComponent {
  items: any;
  subscribe: Subscription;
  loading: boolean = false;
  constructor(
    private collectionsService: CollectionsHomeService,
    private router: Router,
    private dialog: MatDialog
  ) {
    this.subscribe = new Subscription();
  }

  ngOnInit(): void {
    this.loading = true;
    this.subscribe = this.collectionsService.getItems().subscribe(
      (data) => {
        this.items = data;
        this.loading = false;
      },

      (error) => console.error(error)
    );
  }
  redirectToUser(user: string) {
    this.router.navigate(['', user]);
  }

  redirectToNfts(param: string) {
    this.router.navigate(['/explore/collections', param]);
  }

  openNftDetails(nftId: string) {
    const dialogRef = this.dialog.open(NftDetailsComponent, {
      panelClass: ['full-screen-modal'],
      data: {
        nftId: nftId,
      },
    });
    dialogRef.afterClosed().subscribe((result) => {});
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }
}
