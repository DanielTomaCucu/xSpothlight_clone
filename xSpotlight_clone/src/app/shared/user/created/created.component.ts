import { Component, OnInit } from '@angular/core';
import { CreatedService } from './created.service';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { NftDetailsComponent } from 'src/app/nft-details/nft-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-created',
  templateUrl: './created.component.html',
  styleUrls: ['./created.component.css'],
})
export class CreatedComponent implements OnInit {
  userId: string | null = '';
  nfts: any = [];
  subs: Subscription;

  constructor(
    private createdService: CreatedService,
    private dialog: MatDialog
  ) {
    this.subs = new Subscription();
  }

  ngOnInit(): void {
    this.userId = localStorage.getItem('userId')!;
    this.subs = this.createdService
      .getCreatedNfts(this.userId)
      .subscribe((data) => {
        this.nfts = data;
      });
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
    this.subs.unsubscribe();
  }
}
