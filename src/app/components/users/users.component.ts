import { Component, OnInit } from '@angular/core';
import { Customer_ } from 'src/app/Models/user';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  UsersAll : Customer_[]|undefined;
  // CountUser: number|undefined;
  // DriverID: Driver_[]|undefined;
  // DriverName: Driver_[]|undefined;




  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.User();
  }

  User(){
    this.networkService.getUsers().subscribe( 

      data => {
        this.UsersAll = data.result;
        
        // this.CountUser = this.UsersAll1.length;
        // this.DriverID = data.result;
        // this.DriverName = data.result.sort();

        console.log(data.result[1].Customer_ID);
        
        // alert(JSON.stringify(data.result[1].UserID));
    },
    error => {
    alert("Can't not get users data");
    });
    
    }
    
}


