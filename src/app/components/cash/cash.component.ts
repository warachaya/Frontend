import {
  Component,
  OnInit
} from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';

const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-cash',
  templateUrl: './cash.component.html',
  styleUrls: ['./cash.component.css']
})
export class CashComponent implements OnInit {


  ID: String | any;

  websiteList: any = ['Cash', 'Account Receivable', 'Account Payable', 'Inventory']


  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });

  get f() {
    return this.form.controls;
  }

  submit() {
    console.log(this.form.value);
  }

  changeWebsite(e: any) {
    console.log(e.target.value);
  }


  ngOnInit(): void {
    this.ID = loginID;
  }
  

}
