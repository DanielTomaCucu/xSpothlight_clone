import { Component } from '@angular/core';
import { TrendingService } from './trending.service';


@Component({
  selector: 'app-trending',
  templateUrl: './trending.component.html',
  styleUrls: ['./trending.component.css'],
})
export class TrendingComponent {
  items: any = [];
  constructor(private trendingService: TrendingService) {}
   ngOnInit(): void {
    const identifiers = [
      'PRTNFTS-8404f1-01',
      'BCXSUB-eafa31-06',
      'TIGERX-fe2ebe-6f',
    ];
    this.trendingService.getMultipleItems(identifiers).subscribe(
      data => {
        this.items = data.flat();
        console.log(this.items)
      },
      error => console.error(error)
    );
   }




}

