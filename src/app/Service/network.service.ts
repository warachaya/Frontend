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
  // }

  getUsers(){
    return [
      {
        "userId": 1,
        "id": 3,
        "title": "ea molestias quasi exercitationem rt aut",
        "body": "et iusto sed quo iure\nvolupore et velit aut"
      },
      {
        "userId": 1,
        "id": 4,
        "title": "eum et est occaecati",
        "body": "ullam et saeemque ipsam iure\nqtatem rerum illo velit"
      },
    ];
    }

}