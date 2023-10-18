import { Component, HostListener } from '@angular/core';
import { NftsCollectionService } from './nfts-collection.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  constructor(
    private nftsCollectionService: NftsCollectionService,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  ngOnInit() {
    this.loadMore();
    this.nftsCollectionService
      .getCollectionDetail(this.collectionId)
      .subscribe((data) => {
        console.log(data);
        this.collectionDetail = data;
      });
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

    this.nftsCollectionService
      .getNftsFromCollection(this.collectionId)
      .subscribe((data) => {
        this.nfts = [...this.nfts, ...data];
        this.loading = false;
        console.log(data);
      });
  }
  redirectToUser(user:string) {
this.router.navigate(['', user]);
  }
}
