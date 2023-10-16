import { Component } from '@angular/core';
import { ExploreService } from './explore.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent {
  collections: number = 0;
  nfts: number = 0;
  constructor(private exploreService: ExploreService) {}
  ngOnInit() {
    this.exploreService
      .getCollections()
      .subscribe((data) => (this.collections = data));
    this.exploreService.getNFTs().subscribe((data) => (this.nfts = data));
  }
}
