import { Component, OnInit } from '@angular/core';
// import { Users } from '../../Models/user';
import { NetworkService } from 'src/app/Service/network.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label } from 'ng2-charts';




@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
// userAll : Users[] | undefined;
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
