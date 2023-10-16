import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class NftsService {
  baseApi = environment.apiUrl;
  page: number = 0;
  constructor(private http: HttpClient) {}
  getNfts(): Observable<any> {
    this.page += 10;
    return this.http.get<any>(`${this.baseApi}/nfts?from=${this.page}&size=10`);
  }
}
