import { Component, OnInit } from '@angular/core';
import { Driver_ } from 'src/app/Models/user';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  UsersAll : Driver_[]|undefined;
  CountUser: number|undefined;
  DriverID: Driver_[]|undefined;
  DriverName: Driver_[]|undefined;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.User();
  }
  User(){
    this.networkService.getUsers().subscribe(

      data => {
        this.UsersAll = data.result;
        this.CountUser = this.UsersAll.length;
        this.DriverID = data.result;
        this.DriverName = data.result.sort();
    
        alert(JSON.stringify(this.UsersAll));
    },
    error => {
    alert("Can't not get users data");
    });
    
    }
    
}


