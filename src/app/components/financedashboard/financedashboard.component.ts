import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-financedashboard',
  templateUrl: './financedashboard.component.html',
  styleUrls: ['./financedashboard.component.css']
})
export class FinancedashboardComponent implements OnInit {

  constructor(private router:Router) { }


  ngOnInit(): void {
  }
  onClickSubmit(){

      this.router.navigate(["/main/journalizing"]);
    }
    onClickSubmit1(){

      this.router.navigate(["/main/order"]);
    }
    onClickSubmit2(){

      this.router.navigate(["/main/stockcard"]);
    }
    onClickSubmit3(){

      this.router.navigate(["/main/ledger"]);
    }
    onClickSubmit4(){

      this.router.navigate(["/main/income"]);
    }
    onClickSubmit5(){

      this.router.navigate(["/main/paidsale"]);
    }
    onClickSubmit6(){

      this.router.navigate(["/main/reconciliation"]);
    }
    

}
