import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { Observable, forkJoin } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TrendingService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getItem(identifier: string, size: number = 1): Observable<any> {
    const params = new HttpParams()
      .set('size', size.toString())
      .set('identifiers', identifier);

    return this.http.get<any>(`${this.apiUrl}/nfts`, { params });
  }

  getMultipleItems(identifiers: string[]): Observable<any[]> {
    const requests = identifiers.map((identifier) => this.getItem(identifier));
    return forkJoin(requests);
  }
}
