import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Users {
  private baseUrl: string = 'https://jsonplaceholder.typicode.com/';
  private http = inject(HttpClient);

  getUsers(): Observable<any[]>{
    return this.http.get<any[]>(this.baseUrl + "/users");
  }
}
