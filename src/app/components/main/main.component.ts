import { Component, OnInit } from '@angular/core';
import {NetworkService}from 'src/app/Service/network.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loginID : string | any;
  msg : string | any;
  constructor(private networkService: NetworkService, )
  {  }



  ngOnInit(): void {
  }


}

