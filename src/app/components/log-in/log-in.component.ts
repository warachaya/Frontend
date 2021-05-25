import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Employee_ } from 'src/app/Models/user';
import { NetworkService } from 'src/app/Service/network.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  EmployAll : Employee_[]|any;
  CountEmploy : number | any;
  ID : string | undefined;
  Pass : string | undefined;
  Position : string | undefined;
  
  mUsername:String="";
  mPassword:String="";

  constructor(private router:Router, private networkService: NetworkService) { }

  ngOnInit(): void {
    this.onClickSubmit()
  }


  onClickSubmit(){

    // console.log(this.mUsername);
    // console.log(this.mPassword);
    
    
    this.networkService.getEmployee().subscribe( 

      data => {
        this.EmployAll = data.result;
        console.log( this.EmployAll);
        this.CountEmploy = this.EmployAll?.length;
        console.log( this.CountEmploy);
        for (let i = 0; i < this.CountEmploy ; i++){

          if(this.mUsername == data.result[i].Employee_ID && this.mPassword == data.result[i].Password)
          {
            console.log( data.result[i].Employee_Position);
            this.Position = data.result[i].Employee_Position; 
            if(this.Position == "Operator"){this.router.navigate(["/opmain"]);}
            else if(this.Position == "Manager"){this.router.navigate(["/manmain"]);}
          }
          // else if (this.mUsername != data.result[i].Employee_ID )
          // {
          //   let j = 1;
          //   console.log(j);
          // }
        }
            // if (this.mUsername != data.result.Employee_ID || this.mPassword != data.result.Password)
            // {window.alert("Login Failed!");}

            // if( i = 7){window.alert("Login Failed!");}

        
      },
      error => {
        alert("Can't not get users data");
      }
    );

      // for (let i = 0; i < this.CountEmploy ; i++) {
      //   console.log ("Block statement execution no." + i);
      //   this.ID = data.result[i].Employee_ID;
      //   console.log(data.result[i].Employee_ID);
      //   console.log(data.result[i].Employee_Position);

      //   if (data.result[i].Employee_Position == 'Operator')
      //   {
      //     this.router.navigate(["/opmain"]);
      //   }
      //   else
      //   {
      //   window.alert("Login Failed!");
      //   }
        
      // }

      
      // alert(JSON.stringify(data.result[1].UserID));
    

    // if (this.mUsername == "aaa" && this.mPassword == "1234")
    // {
    //   this.router.navigate(["/opmain"]);
    // }
    // else if(this.mUsername == "bbb" && this.mPassword == "1234")
    // {
    //   this.router.navigate(["/manmain"]);
    // }
    // else
    // {
    //  window.alert("Login Failed!");
    // }
  }


}
