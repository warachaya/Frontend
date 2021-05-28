import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  ID: string | any;
  Date: Date[] = [
    {value: 'week1-0', viewValue: 'Week1'},
    {value: 'week2-1', viewValue: 'Week2'},
    {value: 'week3-2', viewValue: 'Week3'},
    {value: 'week4-3', viewValue: 'Week4'},
    {value: 'week4-4', viewValue: 'Week5'},
    {value: 'March-5', viewValue: 'March'},
    
  ];
  
  constructor() { }
  
  ngOnInit(): void {
    this.ID = loginID;
  }
  barChartOptions: ChartOptions = {
    responsive: true,
  };
  barChartLabels: Label[] = ['SaleOffice', 'Inbound WB', 'Diesel Bay', 'Gasohol Bay', 'Outbound WB'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  
  barChartData: ChartDataSets[] = [
    { data: [45, 37, 60, 70, 46, 33], 
      label: 'Best Fruits',
      backgroundColor: "rgba(219, 0, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }
  ];
  
  barChartOptions1: ChartOptions = {
    responsive: true,
  };
  barChartLabels1: Label[] = ['SaleOffice', 'Inbound WB', 'Diesel Bay', 'Gasohol Bay', 'Outbound WB'];
  barChartType1: ChartType = 'bar';
  barChartLegend1 = true;
  barChartPlugins1 = [];
  
  barChartData1: ChartDataSets[] = [
    { data: [45, 37, 60, 10, 46, 33], 
      label: 'Best Fruits',
      backgroundColor: "rgba(100, 30, 600, 2)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }
  ];
  
  barChartOptions2: ChartOptions = {
    responsive: true,
  };
  barChartLabels2: Label[] = ['SaleOffice', 'Inbound WB', 'Diesel Bay', 'Gasohol Bay', 'Outbound WB'];
  barChartType2: ChartType = 'bar';
  barChartLegend2 = true;
  barChartPlugins2 = [];
  
  barChartData2: ChartDataSets[] = [
    { data: [45, 37, 60, 10, 46, 33], 
      label: 'Best Fruits',
      backgroundColor: "rgba(100, 120, 50, 10)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }
  ];
  
}

interface Date {
  value: string;
  viewValue: string;
}

