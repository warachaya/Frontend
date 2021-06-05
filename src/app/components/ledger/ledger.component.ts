import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NetworkService } from 'src/app/Service/network.service';
import { Cash_ } from 'src/app/Models/Cash';
import { Account_Payable_ } from 'src/app/Models/AccountPayable';
import { Account_Recievable_ } from 'src/app/Models/AccountRecievable';
import { Diesel_ } from 'src/app/Models/Diesel';
import { Gasohol95_ } from 'src/app/Models/Gasohol95';
import { Data_ } from 'src/app/Models/ledger Data';

const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css'],
})
export class LedgerComponent implements OnInit {
  Date: Date[] = [
    {
      value: '1',
      viewValue: 'Cash',
    },

    {
      value: '2',
      viewValue: 'Account Receivable',
    },

    {
      value: '3',
      viewValue: 'Account Payable',
    },

    {
      value: '4',
      viewValue: 'Diesel',
    },

    {
      value: '5',
      viewValue: 'Gasohol95',
    },
  ];
  ID: string | any;
  ReceiveData : Data_[] | any;
  AccReceive : Account_Recievable_[] | undefined;
  AccPay : Account_Payable_[] | undefined;
  Cash : Cash_[] | undefined;
  Diesel : Diesel_[] | undefined;
  Gas : Gasohol95_[] | undefined;

  constructor(private networkService: NetworkService) {}
  ngOnInit(): void {
    this.ID = loginID;
    // this.changeData();
  }

  form = new FormGroup({
    website: new FormControl('', Validators.required),
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }
  changeWebsite(e: any) {
    console.log(e.target.value);
    // this.CompDate = e.target.value;
    // console.log(this.CompDate);

    this.networkService.getAccountRecieveable().subscribe((data) => {
      this.AccReceive = data.result;
      console.log(this.AccReceive);


      this.networkService.getAccountpayable().subscribe((data) => {
        this.AccPay = data.result;
        console.log(this.AccPay);

        this.networkService.getCash().subscribe((data) => {
          this.Cash = data.result;
          console.log(this.Cash);

          this.networkService.getDiesel().subscribe((data ) => {
            this.Diesel = data.result;
            console.log(this.Diesel);
            this.networkService.getGasohol95().subscribe((data) => {
              this.Gas = data.result;
              console.log(this.Gas);

              if(e.target.value == 'Cash' ){
                this.ReceiveData = this.Cash
              }
              else if(e.target.value == 'Account Receivable' ){
                this.ReceiveData = this.AccReceive
              }
              else if(e.target.value == 'Account Payable' ){
                this.ReceiveData = this.AccPay
              }
              else if(e.target.value == 'Diesel' ){
                this.ReceiveData = this.Diesel
              }
              else if(e.target.value == 'Gasohol95' ){
                this.ReceiveData = this.Gas
              }

              });
            });
          });
        });
      });

  }

  // changeData() {}
}
interface Date {
  value: string;
  viewValue: string;
}
