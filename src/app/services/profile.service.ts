import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private readonly url = environment.url;

  constructor(private http: HttpClient) { }

  findProfileByName(query: any): Observable<any>{
    return this.get('', query).pipe(
      map(response => response)
    );
  }

  private get(endPoint?: string, query?: string, params?: HttpParams): Observable<any>{
    return this.http.get(`${this.url}/${endPoint}/${query}`, { params });
  }
}
