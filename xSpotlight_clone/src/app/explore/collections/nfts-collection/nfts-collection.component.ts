import { Component, HostListener } from '@angular/core';
import { NftsCollectionService } from './nfts-collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NftDetailsComponent } from 'src/app/nft-details/nft-details.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-nfts-collection',
  templateUrl: './nfts-collection.component.html',
  styleUrls: ['./nfts-collection.component.css'],
})
export class NftsCollectionComponent {
  nfts: any = [];
  loading: boolean = false;
  collectionId = this.route.snapshot.paramMap.get('param');
  collectionDetail: any = '';
  subs: Subscription;
  constructor(
    private nftsCollectionService: NftsCollectionService,
    private route: ActivatedRoute,
    private router: Router,     private dialog: MatDialog,
  ) {
    this.subs = new Subscription();
  }
  ngOnInit() {
    this.loadMore();
    this.subs.add(
      this.nftsCollectionService
        .getCollectionDetail(this.collectionId)
        .subscribe((data) => {
          this.collectionDetail = data;
        })
    );
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    const pos =
      (document.documentElement.scrollTop || document.body.scrollTop) +
      window.innerHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max - 900 && !this.loading) {
      this.loadMore();
    }
  }

  loadMore() {
    this.loading = true;
    this.subs.add(
      this.nftsCollectionService
        .getNftsFromCollection(this.collectionId)
        .subscribe((data) => {
          this.nfts = [...this.nfts, ...data];
          this.loading = false;
        })
    );
  }

  redirectToUser(event: Event, user: string) {
    event.stopPropagation();
    this.router.navigate(['', user]);
  }
  openNftDetails(nftId:string) {
    const dialogRef = this.dialog.open(NftDetailsComponent, {
      panelClass: ['full-screen-modal'],
      data: {
        nftId: nftId
      }
    });
    dialogRef.afterClosed().subscribe((result) => {
    });
  }


  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
