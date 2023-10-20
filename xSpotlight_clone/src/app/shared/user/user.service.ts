import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  baseApi = environment.apiUrl;
  private collectionKeys: string[] = [];

  constructor(private http: HttpClient) {}
  getNFTsCollected(user: string): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/accounts/${user}/nfts/count`);
  }
  getNFTsCreated(user: string): Observable<any> {
    return this.http
      .get<any>(`${this.baseApi}/accounts/${user}/collections`)
      .pipe(
        map((data) => {
          this.collectionKeys = data.map((item: any) => item.collection); // Store collectionKeys
          return {
            totalNftCount: data.reduce((acc: number, item: any) => {
              const nftCount =
                item.hasOwnProperty('nftCount') &&
                typeof item.nftCount === 'number'
                  ? item.nftCount
                  : 0;
              return acc + nftCount;
            }, 0),
            collectionKeys: this.collectionKeys,
          };
        })
      );
  }
  getCollectionKeys(): string[] {
    return this.collectionKeys;
  }
}
