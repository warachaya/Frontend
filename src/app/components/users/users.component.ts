import { Component, OnInit } from '@angular/core';
// import { User_ } from 'src/app/Models/user';
import { NetworkService } from 'src/app/Service/network.service';
import { SharedService } from 'src/app/Service/Shared.service';
// import { LogInComponent } from '../log-in/log-in.component';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  //UsersAll1 : Driver_[]|undefined;
  // CountUser: number|undefined;
  // DriverID: Driver_[]|undefined;
  // DriverName: Driver_[]|undefined;

  // EmployAll : User_[]|undefined;
  // ID : string | undefined;
  // Pass : string | undefined;
  // Position : string | undefined;
  // Fname : string | undefined;
  // Lname : string | undefined;
  // Phone : string | undefined;
  // Mail : string | undefined;
  // Bday : Date | undefined;
  // Age : number | undefined;
  // Sex : string | undefined;

  UserID : string | undefined;

  



  constructor(private networkService: NetworkService ,public SharedService : SharedService) 
  { 
    this.SharedService.stream$.subscribe(this.receiveMessage.bind(this))
  }

  
  ngOnInit(): void {
    this.User()
  }

  receiveMessage(msg : string) {
    console.log(msg); // your message from component A
    this.UserID = msg;
    console.log(this.UserID);
 }
  

  User(){
    this.networkService.getEmployee().subscribe( 

      data => {
        // this.EmployAll = data.result;
            

        // console.log(data.result[1].UserID);
        
        // alert(JSON.stringify(data.result[1].UserID));
    },
    error => {
    alert("Can't not get users data");
    });
    
    }
    
}


