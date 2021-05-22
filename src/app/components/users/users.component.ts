import { Component, OnInit } from '@angular/core';
// import { Console } from 'console';
import { Driver_ } from 'src/app/Models/user';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  UsersAll1 : Driver_[]|undefined;
  // CountUser: number|undefined;
  // DriverID: Driver_[]|undefined;
  // DriverName: Driver_[]|undefined;




  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.User();
  }
  User(){
    this.networkService.getUsers1().subscribe( 

      data => {
        this.UsersAll1 = data.result;
        
        // this.CountUser = this.UsersAll1.length;
        // this.DriverID = data.result1;
        // this.DriverName = data.result1.sort();

        console.log(data.result[1].UserID);
        
        alert(JSON.stringify(data.result[1].UserID));
    },
    error => {
    alert("Can't not get users data");
    });
    
    }
    
}


