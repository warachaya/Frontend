import { Component, OnInit } from '@angular/core';
import { Inventory_Stock_Card_ } from 'src/app/Models/Inventory';
import { NetworkService } from 'src/app/Service/network.service';

const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-stockcard',
  templateUrl: './stockcard.component.html',
  styleUrls: ['./stockcard.component.css']
})

export class StockcardComponent implements OnInit {
  ID: string | any;
  Stock: Inventory_Stock_Card_[]|undefined;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.ID = loginID;
    this.networkService.getInventory().subscribe((data) => {
      this.Stock = data.result;
      console.log(this.Stock);
    });
  }

}
