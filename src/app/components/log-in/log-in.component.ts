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

  EmployAll : Employee_[]|undefined;
  CountEmploy : number | any;
  ID :  string | any;
  Pass : string | undefined;
  Position : string | undefined;

  mUsername:String="";
  mPassword:String="";
  msg : string | any;


  constructor(private router:Router, private networkService: NetworkService ,

    ) { }

    ngOnInit(): void {
      localStorage.clear();
      this.onClickSubmit();
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

          for (let i = 0; i <= this.CountEmploy ; i++){

            if(this.mUsername == data.result[i].Employee_ID && this.mPassword == data.result[i].Password)
            {
              this.ID = data.result[i].Employee_ID
              console.log( data.result[i].Employee_Position);
              this.Position = data.result[i].Employee_Position;
              if(this.Position == "Operator")
              {
                this.router.navigate(["op_main"]);
                this.msg = this.ID


                localStorage.setItem('ID', data.result[i].Employee_ID);

              }
              else if(this.Position == "Manager")
              {
                this.router.navigate(["man_main"]);

                localStorage.setItem('ID', data.result[i].Employee_ID);
              }

            }

            else if(this.mUsername == data.result[i].Employee_ID && this.mPassword != data.result[i].Password)
            {
              window.alert("Login Failed!");
            }

            else if(this.mUsername != data.result.Employee_ID && this.mPassword == data.result.Password)
            {

              window.alert("Login Failed!");

            }

            else if (this.mUsername != "" && i == 6)
            {
              window.alert("Login Failed!");
              console.log( i );
            }


          }

          if (this.mUsername == "" && this.mPassword =="")
          {
            console.log( this.EmployAll);
          }



        },
        error => {
          alert("Can't not get users data");
        }
        );


      }




}



