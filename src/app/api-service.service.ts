import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {
  constructor(private http: HttpClient) { }

  private Base_Url: string = 'https://hn.algolia.com/api/v1/search_by_date?tags=story';
  feachserice(): Observable<any> {
    return this.http.get(this.Base_Url);
  }

}
