import { Component } from '@angular/core';
import { ExploreService } from './explore.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.component.html',
  styleUrls: ['./explore.component.css'],
})
export class ExploreComponent {
  collections: number = 0;
  nfts: number = 0;
  constructor(private exploreService: ExploreService, private router: Router) {}
  ngOnInit() {
    this.exploreService
      .getCollections()
      .subscribe((data) => (this.collections = data));
    this.exploreService.getNFTs().subscribe((data) => (this.nfts = data));
  }
  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
