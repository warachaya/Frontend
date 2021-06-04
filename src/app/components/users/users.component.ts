import { Component, OnInit } from '@angular/core';
// import { User_ } from 'src/app/Models/user';
import { NetworkService } from 'src/app/Service/network.service';
// import { LogInComponent } from '../log-in/log-in.component';
import { Employee_ } from 'src/app/Models/user';


const loginID = localStorage.getItem('ID');
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

  EmployAll : Employee_[]|undefined;
  UserID : string | undefined;
  Pass : string | undefined;
  Position : string | undefined;
  Fname : string | undefined;
  Lname : string | undefined;
  Phone : string | undefined;
  Mail : string | undefined;
  Bday : Date | undefined;
  Age : number | undefined;
  Sex : string | undefined;
  CountEmploy : number | any;

  ID : string | any;





  constructor(private networkService: NetworkService ,
    // public SharedService : SharedService
    )
  {
    // this.SharedService.stream$.subscribe(this.receiveMessage.bind(this))
  }


  ngOnInit(): void {
    this.User()
    this.ID = loginID;
  }

//   receiveMessage(msg : string) {
//     console.log(msg); // your message from component A
//     this.UserID = msg;
//     console.log(this.UserID);
//  }


  User(){
    this.networkService.getEmployee().subscribe(

      data => {
        this.EmployAll = data.result;
        this.CountEmploy = this.EmployAll?.length;
        for (let i = 0; i <= this.CountEmploy ; i++){

          if(this.ID == data.result[i].Employee_ID)
          {
            this.UserID = data.result[i].Employee_ID
            this.Position = data.result[i].Employee_Position
            this.Fname = data.result[i].Employee_Name
            this.Lname = data.result[i].Employee_Surname
            this.Phone = data.result[i].Employee_Phonenumber
            this.Mail = data.result[i].E_mail
            this.Bday = data.result[i].Date_of_Birthday
            this.Age  = data.result[i].Age
            this.Sex = data.result[i].Gender

            console.log( this.UserID);
            console.log( this.Position);
            console.log( this.Fname);
            console.log( this.Lname);
            console.log( this.Phone);
            console.log( this.Mail);
            console.log( this.Bday);
            console.log( this.Age);
            console.log( this.Sex);

          }


        }



        // alert(JSON.stringify(data.result[1].UserID));
    },
    error => {
    alert("Can't not get users data");
    });

    }

}


