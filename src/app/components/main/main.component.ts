import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/Service/Shared.service';
import {NetworkService}from 'src/app/Service/network.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loginID : string | any;
  msg : string | any;
  constructor(private networkService: NetworkService, public SharedService : SharedService ) 
  { this.SharedService.stream$.subscribe(this.receiveMessage.bind(this)) }


  
  ngOnInit(): void {
  }
  receiveMessage(msg : string) {
    console.log(msg); // your message from component A
    this.loginID = msg;
    console.log(this.loginID);
 } 

  sendMessage(msg : string) {
    this.SharedService.send(this.msg);
    // console.log( msg );
  }

  onClickSubmit(){
    this.sendMessage(this.loginID);
  }


}

