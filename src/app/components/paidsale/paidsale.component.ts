import { Component, OnInit } from '@angular/core';
import { Invoice_ } from  'src/app/Models/Invoice'
import { NetworkService } from 'src/app/Service/network.service';


const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-paidsale',
  templateUrl: './paidsale.component.html',
  styleUrls: ['./paidsale.component.css']
})
export class PaidsaleComponent implements OnInit {

  ID: string | any;
  invoice : Invoice_[] | undefined;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.ID = loginID;
    this.networkService.getInvoice().subscribe((data) => {
      this.invoice = data.result;
      console.log(this.invoice);
    });
  }

}
