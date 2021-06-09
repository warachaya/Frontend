import { Component, OnInit } from '@angular/core';
const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-receivable',
  templateUrl: './receivable.component.html',
  styleUrls: ['./receivable.component.css']
})
export class ReceivableComponent implements OnInit {
  
  ID: string | any;
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }

}
