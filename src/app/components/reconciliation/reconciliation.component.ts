import { Component, OnInit } from '@angular/core';
import {Reconciliation_} from 'src/app/Models/Reconciliation';
import { NetworkService } from 'src/app/Service/network.service';

const loginID = localStorage.getItem('ID');
@Component({
  selector: 'app-reconciliation',
  templateUrl: './reconciliation.component.html',
  styleUrls: ['./reconciliation.component.css']
})
export class ReconciliationComponent implements OnInit {
  ID: string | any;
  recon : Reconciliation_[]| undefined;

  constructor(private networkService: NetworkService) { }

  ngOnInit(): void {
    this.ID = loginID;
    this.networkService.getReconciliation().subscribe((data) => {
      this.recon = data.result;
      console.log(this.recon);
    });
  }

}
