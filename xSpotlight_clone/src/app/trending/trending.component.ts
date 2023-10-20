import { Component } from '@angular/core';
import { TrendingService } from './trending.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  items: any = [];
  loading: boolean = false;
  subs: Subscription;
  constructor(private trendingService: TrendingService) {
    this.subs = new Subscription();
  }
  ngOnInit(): void {
    this.loading = true;
    const identifiers = [
      'PRTNFTS-8404f1-01',
      'BCXSUB-eafa31-06',
      'TIGERX-fe2ebe-6f',
    ];
     this.trendingService.getMultipleItems(identifiers).subscribe(
      (data) => {
        this.items = data.flat();
        this.loading = false;
      },
      (error) => console.error(error)
    );
  }

  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
