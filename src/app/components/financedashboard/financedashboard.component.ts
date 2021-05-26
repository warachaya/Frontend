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

      this.router.navigate(["/journalizing"]);
    }
    onClickSubmit1(){

      this.router.navigate(["/order"]);
    }
    onClickSubmit2(){

      this.router.navigate(["/stockcard"]);
    }
    onClickSubmit3(){

      this.router.navigate(["/ledger"]);
    }
    onClickSubmit4(){

      this.router.navigate(["/income"]);
    }
    onClickSubmit5(){

      this.router.navigate(["/paidsale"]);
    }
    onClickSubmit6(){

      this.router.navigate(["/reconciliation"]);
    }
    

}
