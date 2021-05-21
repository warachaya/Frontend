import { Component, OnInit } from '@angular/core';
import { Users } from '../../Models/user';
import { NetworkService } from 'src/app/Service/network.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';




@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  Date: Date[] = [
    {value: '1 March-4', viewValue: '1 March'},
    {value: '2 March-5', viewValue: '2 March'},
    {value: '3 March-6', viewValue: '3 March'},
    {value: '4 March-7', viewValue: '4 March'},
    {value: '5 March-8', viewValue: '5 March'},
    {value: '6 March-9', viewValue: '6 March'},
    {value: '7 March-10', viewValue: '7 March'},
    {value: '8 March-11', viewValue: '8 March'},
    {value: '9 March-12', viewValue: '9 March'},
    {value: '10 March-13', viewValue: '10 March'},
    {value: '11 March-14', viewValue: '11 March'},
    {value: '12 March-15', viewValue: '12 March'},
    {value: '13 March-16', viewValue: '13 March'},
    {value: '14 March-17', viewValue: '14 March'},
    {value: '15 March-18', viewValue: '15 March'},
    {value: '16 March-19', viewValue: '16 March'},
    {value: '17 March-30', viewValue: '17 March'},
    {value: '18 March-31', viewValue: '18 March'},
    {value: '19 March-32', viewValue: '19 March'},
    {value: '20 March-33', viewValue: '20 March'},
    {value: '21 March-34', viewValue: '21 March'},
    {value: '22 March-35', viewValue: '22 March'},
    {value: '23 March-36', viewValue: '23 March'},
    {value: '24 March-37', viewValue: '24 March'},
    {value: '25 March-38', viewValue: '25 March'},
    {value: '26 March-39', viewValue: '26 March'},
    {value: '27 March-40', viewValue: '27 March'},
    {value: '28 March-41', viewValue: '28 March'},
    {value: '29 March-42', viewValue: '29 March'},
    {value: '30 March-43', viewValue: '30 March'},
    {value: '31 March-44', viewValue: '31 March'}
  ];

userAll : Users[] | undefined;
constructor(private networkService: NetworkService) { }
ngOnInit(): void {
this.feedUsers();
}
feedUsers()
{
// this.networkService.getUsers().subscribe(
// data => {
// this.userAll = data.result;
// alert(JSON.stringify(this.userAll));
// },
// error => {
// alert("Can't not get users data");
// });
  // this.userAll = this.networkService.getUsers();
  // alert(this.userAll[0])
}
barChartOptions: ChartOptions = {
  responsive: true,
};
barChartLabels: Label[] = ['Apple', 'Banana', 'Kiwifruit', 'Blueberry', 'Orange', 'Grapes'];
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
}

interface Date {
  value: string;
  viewValue: string;
}