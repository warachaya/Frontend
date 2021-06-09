import { Component, OnInit } from '@angular/core';
import { NetworkService } from 'src/app/Service/network.service';
import { Monthly_Income_Statement_ } from 'src/app/Models/IncomeStatement';

const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css']
})
export class IncomeComponent implements OnInit {
  Income: Monthly_Income_Statement_[]|undefined;

  ID: string | any;
  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.ID = loginID;
    this.networkService.getIncomeStatement().subscribe((data) => {
      this.Income = data.result;
      console.log(this.Income);
    });
  }

}
