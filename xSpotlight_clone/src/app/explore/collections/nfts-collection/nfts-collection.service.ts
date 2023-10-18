import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NftsCollectionService {
  baseApi = environment.apiUrl;
  page: number = 0;
  constructor(private http: HttpClient) {}
  getNftsFromCollection(collectionId: string | null): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseApi}/collections/${collectionId}/nfts?from=${this.page}&size=10`
      )
      .pipe(
        tap(() => {
          this.page += 10;
        })
      );
  }

  getCollectionDetail(collectionId: string | null): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/collections/${collectionId}`);
  }
}
