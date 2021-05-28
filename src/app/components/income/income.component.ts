import { Component, OnInit } from '@angular/core';

const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  
  ID: string | any;
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }

}
