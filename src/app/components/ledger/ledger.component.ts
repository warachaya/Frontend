import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-ledger',
  templateUrl: './ledger.component.html',
  styleUrls: ['./ledger.component.css']
})
export class LedgerComponent implements OnInit { websiteList: any =
  [ 'Cash',
  'Account Receivable',
  'Account Payable'
]
ID: string | any;

form = new FormGroup({
  website: new FormControl('', Validators.required)
});

get f(){
  return this.form.controls;
}

submit(){
  console.log(this.form.value);
}

changeWebsite(e : any) {
  console.log(e.target.value);
}


ngOnInit(): void {
    this.ID = loginID;
  }

}





