import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
// import { UsersAll } from '../Models/user';
import { UsersAll } from '../Models/user';

@Injectable({
providedIn: 'root'
})

export class NetworkService {

  // public userURL1 = `https://localhost:44318/api/auth/user`;
  // private userURL = `https://localhost:5001/weatherforecast`;

  public ManagerURL = `https://localhost:44318/api/auth/manager`;
  public OperatorURL = `https://localhost:44318/api/auth/operator`;
  public DriverURL = `https://localhost:44318/api/auth/driver`;
  public TruckURL = `https://localhost:44318/api/auth/truck`;
  public CustomerURL = `https://localhost:44318/api/auth/customer`;
  public BayURL = `https://localhost:44318/api/auth/baystation`;
  public TranURL = `https://localhost:44318/api/auth/transaction`;
  public PaymentURL = `https://localhost:44318/api/auth/payment`;
  

  


  constructor(private httpClient: HttpClient) { }

  // getUsers(): Observable<UsersAll> {
  //   return this.httpClient.get<UsersAll>(this.userURL);    
  // }
  getUsers(): Observable<UsersAll> { // fix type case 
    return this.httpClient.get<UsersAll>(this.CustomerURL);    
  }

  // getUsers2(): Observable<any> { // non-fix type case 
  //   return this.httpClient.get<any>(this.userURL1);    
  // }
}