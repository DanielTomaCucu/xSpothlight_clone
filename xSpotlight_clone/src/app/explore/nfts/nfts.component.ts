import { Component, HostListener, Renderer2 } from '@angular/core';
import { NftsService } from './nfts.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { ScreenshotService } from 'src/app/shared/screenshot.service';
import { MatDialog } from '@angular/material/dialog';
import { NftDetailsComponent } from 'src/app/nft-details/nft-details.component';

@Component({
  selector: 'app-nfts',
  templateUrl: './nfts.component.html',
  styleUrls: ['./nfts.component.css'],
})
export class NftsComponent {
  subs: Subscription;
  constructor(
    private nftsService: NftsService,
    private router: Router,
    private dialog: MatDialog,
    private renderer: Renderer2
  ) {
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

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
