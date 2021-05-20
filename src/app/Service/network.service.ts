import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UsersAll } from '../Models/user';

@Injectable({
providedIn: 'root'
})

export class NetworkService {

  private userURL = `https://localhost:44318/api/auth/Driver`;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<UsersAll> {
    return this.httpClient.get<UsersAll>(this.userURL);
  }
} 