import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Purchase_ } from 'src/app/Models/Purchase';
import { DatePipe } from '@angular/common'
import { NetworkService } from 'src/app/Service/network.service';

const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  websiteList: any = ['1234', '5678','91011']
  ID: string | any;
  Purchase: Purchase_[] | undefined;

  constructor(private networkService: NetworkService, public datepipe: DatePipe) { }


ngOnInit(): void {
    this.ID = loginID;
    this.networkService.getPurchase().subscribe((data) => {
      this.Purchase = data.result;
      console.log(this.Purchase);
    });

  }

}
