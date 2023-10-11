import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CollectionsHomeService {
  private apiUrl = environment.apiUrl;
  constructor(private http: HttpClient) {}
  getItems(): Observable<any[]> {
    // Define your search parameters
    const searchParams = [
      'SUBJECTX-2c184d',
      'COW-cd463d',
      'BAXC-cdf74d',
      'MAFIA-bd0abc',
      'GIANTS-93cadd',
      'GNOGONS-73222b',
      'DRIFTERS-efd96c',
    ];

    const apiCalls = searchParams.map((param) =>
      this.http.get<any>(
        `${this.apiUrl}/nfts?size=10&search=${param}&withScamInfo=false&computeScamInfo=false`
      )
    );

    return forkJoin(apiCalls).pipe(
      map((responses) => responses.map((response) => response)) // Assuming each response has an 'items' property
    );
  }
}
