import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/app/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CollectinsService {
  baseApi = environment.apiUrl;
  page: number = 0;
  constructor(private http: HttpClient) { }
  getCollectionIds(): Observable<any>{
    this.page = +10;
    let result = this.http.get<any>(`${this.baseApi}/collections?from=${this.page}&size=10`);
    console.log(result)
    return result
  }

}
