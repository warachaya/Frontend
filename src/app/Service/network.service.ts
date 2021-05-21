import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersAll } from '../Models/user';
import { UsersAll1 } from '../Models/user';

@Injectable({
providedIn: 'root'
})

export class NetworkService {

  private userURL = `https://localhost:5001/weatherforecast`;
  private userURL1 = `https://localhost:44318/api/auth/Driver`;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UsersAll> {
    return this.httpClient.get<UsersAll>(this.userURL);    
  }
  getUsers1(): Observable<UsersAll1> {
    return this.httpClient.get<UsersAll1>(this.userURL1);    
  }
}