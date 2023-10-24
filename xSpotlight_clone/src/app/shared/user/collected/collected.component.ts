import { Component, HostListener } from '@angular/core';
import { CollectedService } from './collected.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-collected',
  templateUrl: './collected.component.html',
  styleUrls: ['./collected.component.css'],
})
export class CollectedComponent {
  nfts: any = [];
  loading: boolean = false;
  nextCall: boolean = true;
  subs: Subscription;
  constructor(
    private collectedService: CollectedService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.subs = new Subscription();
  }

  ngOnInit() {
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
  loadMore() {
    this.loading = true;
    if (this.nextCall) {
      let user: string = this.route.snapshot.paramMap.get('user')!;
      this.subs = this.collectedService
        .getCollectionUser(user)
        .subscribe((data) => {
          this.nfts = [...this.nfts, ...data];
          if (data.length < 10) {
            this.nextCall = false;
          }
          this.loading = false;
        });
    }
  }
  redirectToUser(user: string) {
    this.router.navigate(['', user]);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
