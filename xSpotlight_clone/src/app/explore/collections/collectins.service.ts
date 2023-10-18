import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, concatMap, forkJoin, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectinsService {
  baseApi = environment.apiUrl;
  page: number = 0;
  collections: any[] = [];

  constructor(private http: HttpClient) {}
  fetchCollectionIds(): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseApi}/collections?from=${this.page}&size=10&sort=verifiedAndHolderCount`
      )
      .pipe(
        tap((data) => {
          this.collections = data;
          this.page += 10;
        })
      );
  }

  getCollectionsDataForCollection(collectionId: string): Observable<any> {
    return this.http.get<any>(
      `${this.baseApi}/collections/${collectionId}/nfts?size=1`
    );
  }

  fetchAllCollectionsData(): Observable<any[]> {
    return this.fetchCollectionIds().pipe(
      concatMap(() => {
        const requests = this.collections.map((collection) =>
          this.getCollectionsDataForCollection(collection.collection)
        );
        return forkJoin(requests);
      })
    );
  }
}
