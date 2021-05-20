import { Component, OnInit } from '@angular/core';
import { Users } from '../../Models/user';
import { NetworkService } from 'src/app/Service/network.service';
@Component({
selector: 'app-dashboard',
templateUrl: './dashboard.component.html',
styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
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
}