import { Component, OnInit } from '@angular/core';
const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.css']
})
export class ReconciliationComponent implements OnInit {
  ID: string | any;
  
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }

}
