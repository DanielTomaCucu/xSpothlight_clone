import { Component, HostListener } from '@angular/core';
import { NftsService } from './nfts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css'],
})
export class NftsComponent {
  subs: Subscription;
  constructor(private nftsService: NftsService) {
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
    });
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
