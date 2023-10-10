import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionsHomeService {

  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getItem(): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/nfts?size=10&search=SUBJECTX-2c184d&withScamInfo=false&computeScamInfo=false`
    );
  }
}
