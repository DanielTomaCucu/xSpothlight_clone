import { Component, HostListener } from '@angular/core';
import { CollectinsService } from './collectins.service';
import { Subscription, concatMap, forkJoin } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collections',
  templateUrl: './collections.component.html',
  styleUrls: ['./collections.component.css'],
})
export class CollectionsComponent {
  collections: any[] = [];
  subs: Subscription;
  loading = false;

  constructor(
    private collectionsService: CollectinsService,
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

  private loadMore(): void {
    this.loading = true;

    this.subs = this.collectionsService
      .fetchCollectionIds()
      .pipe(
        concatMap(() => {
          const requests = this.collectionsService.collections.map(
            (collection) => {
              return this.collectionsService.getCollectionsDataForCollection(
                collection.collection
              );
            }
          );
          return forkJoin(requests);
        })
      )
      .subscribe((data) => {
        this.collections = [...this.collections, ...[].concat(...data)];
        this.loading = false;
      });
  }

  redirectToNfts(param: string) {
    this.router.navigate(['/explore/collections', param]);
  }
  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
