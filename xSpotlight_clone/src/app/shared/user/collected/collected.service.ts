import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectedService {
  baseApi = environment.apiUrl;
  items: number = 0;
  constructor(private http: HttpClient) {}

  getCollectionUser(user: string): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseApi}/accounts/${user}/nfts?from=${this.items}&size=10`
      )
      .pipe(tap(() => (this.items += 10)));
  }
}
