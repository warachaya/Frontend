import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'node_modules/rxjs/internal/Subject';
import { BehaviorSubject } from 'node_modules/rxjs/internal/BehaviorSubject';



// import { Subject }    from 'rxjs/Subject';
// import { UsersAll } from '../Models/user';
// import { UsersAll } from '../Models/user';

@Injectable({
providedIn: 'root'
})

export class NetworkService {

  // public userURL1 = `https://localhost:44318/api/auth/user`;
  // private userURL = `https://localhost:5001/weatherforecast`;

  public EmployeeURL = `https://localhost:44318/api/auth/employee`;
  public DriverURL = `https://localhost:44318/api/auth/driver`;
  public TruckURL = `https://localhost:44318/api/auth/truck`;
  public CustomerURL = `https://localhost:44318/api/auth/customer`;
  public BayURL = `https://localhost:44318/api/auth/baystation`;
  public TranURL = `https://localhost:44318/api/auth/transaction`;
  public Tran2URL = `https://localhost:44318/api/auth/transaction2`;
  public PaymentURL = `https://localhost:44318/api/auth/payment`;
  

  


  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> { 
    return this.httpClient.get<any>(this.CustomerURL);    
  }

  getEmployee(): Observable<any> { // non-fix type case 
    return this.httpClient.get<any>(this.EmployeeURL);    
  }
  getTransac(): Observable<any> { // non-fix type case 
    return this.httpClient.get<any>(this.TranURL);    
  }
  
}
