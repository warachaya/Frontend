import { Component, OnInit } from '@angular/core';
const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-paidsale',
  templateUrl: './paidsale.component.html',
  styleUrls: ['./paidsale.component.css']
})
export class PaidsaleComponent implements OnInit {
  
  ID: string | any;
  
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }

}
