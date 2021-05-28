import { Component, OnInit } from '@angular/core';
const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-stockcard',
  templateUrl: './stockcard.component.html',
  styleUrls: ['./stockcard.component.css']
})
export class StockcardComponent implements OnInit {
  ID: string | any;
  
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }

}
