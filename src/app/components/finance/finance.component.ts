import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-finance',
  templateUrl: './finance.component.html',
  styleUrls: ['./finance.component.css']
})
export class FinanceComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
      backgroundColor: "rgba(219, 80, 70, 1)",
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
      backgroundColor: "rgba(100, 20, 45, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }
  ];
}
