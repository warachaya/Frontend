import { Component, OnInit } from '@angular/core';
import {NetworkService}from 'src/app/Service/network.service';

@Component({
  selector: 'app-OPmain',
  templateUrl: './OPmain.component.html',
  styleUrls: ['./OPmain.component.css']
})
export class OPmainComponent implements OnInit {
  loginID : string | any;
  msg : string | any;

  constructor(private networkService: NetworkService)
  { }



  ngOnInit(): void {
  }




}

