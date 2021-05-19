import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  mUsername:String="";
  mPassword:String="";

  constructor(private router:Router
              ) { }

  ngOnInit(): void {
  }

  onClickSubmit(){

    console.log(this.mUsername);
    console.log(this.mPassword);
    
    if (this.mUsername == "aaa" && this.mPassword == "1234")
    {
      this.router.navigate(["/main"]);
    }
    else
    {
     window.alert("Login Failed!");
    }
  }


}
