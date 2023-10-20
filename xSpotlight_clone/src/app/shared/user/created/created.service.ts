import { Injectable } from '@angular/core';
import { UserService } from '../user.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';
import { tap } from 'cypress/types/lodash';

@Injectable({
  providedIn: 'root',
})
export class CreatedService {
  baseApi = environment.apiUrl;
  page: any = 0;
  constructor( private http: HttpClient) {}

  getCreatedNfts(userId:string): Observable<any> {
    return this.http
      .get<any>(
        `${this.baseApi}/nfts?from=${this.page}&size=10&creator=${userId}`
      )
      
  }
}
