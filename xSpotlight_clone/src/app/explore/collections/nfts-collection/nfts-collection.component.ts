import { Component, HostListener } from '@angular/core';
import { NftsCollectionService } from './nfts-collection.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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
    private router: Router
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
  redirectToUser(user: string) {
    this.router.navigate(['', user]);
  }
  redirectToNftDetail(nftId: string) {
    this.router.navigate(['nft', nftId]);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
