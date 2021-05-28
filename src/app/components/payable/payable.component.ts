import { Component, OnInit } from '@angular/core';
const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-payable',
  templateUrl: './payable.component.html',
  styleUrls: ['./payable.component.css']
})
export class PayableComponent implements OnInit {
  
  ID: string | any;
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }

}
