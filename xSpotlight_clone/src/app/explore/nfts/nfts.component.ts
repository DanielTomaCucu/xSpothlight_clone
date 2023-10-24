import { Component, HostListener } from '@angular/core';
import { NftsService } from './nfts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css'],
})
export class NftsComponent {
  subs: Subscription;
  constructor(private nftsService: NftsService, private router: Router) {
    this.subs = new Subscription();
  }
  nfts: any = [];
  loading = false;

  ngOnInit(): void {
    this.loadMore();
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

  private loadMore(): void {
    this.loading = true;

    this.subs = this.nftsService.getNfts().subscribe((data) => {
      this.nfts = [...this.nfts, ...data];
      this.loading = false;
      console.log(this.nfts);
    });
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
