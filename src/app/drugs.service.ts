import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DrugsService {
  url : string = "http://152.67.248.21/drug?moa=serotonin";

  constructor(private http: HttpClient) { }
  
  getDrugs(): Observable<any>{
    return this.http.get(this.url, {headers: {Accept : "application/json"}});
  }
}
