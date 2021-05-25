import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  Date: Date[] = [
    {value: 'week1-0', viewValue: 'Week1'},
    {value: 'week2-1', viewValue: 'Week2'},
    {value: 'week3-2', viewValue: 'Week3'},
    {value: 'week4-3', viewValue: 'Week4'},
    {value: 'March-4', viewValue: 'March'},
   
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

interface Date {
  value: string;
  viewValue: string;
}

