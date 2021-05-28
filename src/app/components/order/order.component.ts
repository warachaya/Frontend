import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';
const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit { websiteList: any = ['1234', '5678','91011']
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

changeWebsite(e:any) {
  console.log(e.target.value);
}


ngOnInit(): void {
    this.ID = loginID;
  }

}
