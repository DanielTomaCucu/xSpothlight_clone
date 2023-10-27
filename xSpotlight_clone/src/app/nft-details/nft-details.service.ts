import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NftDetailsService {
  baseApi = environment.apiUrl;
  page: number = 0;
  constructor(private http: HttpClient) {}

  getNftDetail(id: string): Observable<any> {
    return this.http.get<any>(`${this.baseApi}/nfts/${id}`);
  }
  getNftHistory(id: string): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseApi}/nfts/${id}/transactions?from=${this.page}&size=3&order=desc&withUsername=true`
      )
      .pipe(
        tap(() => {
          this.page += 3;
        })
      );
  }
}
