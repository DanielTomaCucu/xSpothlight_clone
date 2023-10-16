import { Component, HostListener } from '@angular/core';
import { NftsService } from './nfts.service';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css'],
})
export class NftsComponent {
  constructor(private nftsService: NftsService) { }
  nfts: any = [];
  loading = false;
  ngOnInit(): void {
    this.loadMore();
  }
  @HostListener('window:scroll', [])
  onScroll(): void {
    const pos = (document.documentElement.scrollTop || document.body.scrollTop) + window.innerHeight;
    const max = document.documentElement.scrollHeight;
    if (pos >= max - 900 && !this.loading) {
      this.loadMore();
    }
  }

  private loadMore(): void {
    this.loading = true;  // Set loading flag to true when starting a new request

    this.nftsService.getNfts().subscribe(data => {
      this.nfts = [...this.nfts, ...data];
      this.loading = false;  // Reset loading flag once request is complete
      console.log(data)
    });
  }
}
