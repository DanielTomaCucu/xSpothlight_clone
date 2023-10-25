import { Component } from '@angular/core';
import { TrendingService } from './trending.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  items: any = [];
  loading: boolean = false;
  subs: Subscription;
  constructor(
    private trendingService: TrendingService,
    private router: Router
  ) {
    this.subs = new Subscription();
  }
  ngOnInit(): void {
    this.loading = true;
    const identifiers = [
      'XHACKER23-1a842f',
      'XDAY23TEAM-f7a346',
      'POKERPASS-9d4f42',
    ];
    this.trendingService.getMultipleItems(identifiers).subscribe(
      (data) => {
        this.items = data.flat();
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
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
