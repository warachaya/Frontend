import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';

import { NetworkService } from 'src/app/Service/network.service';

import { Journalize_ } from 'src/app/Models/Journalize';

import { DatePipe } from '@angular/common'




const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-journalizing',
  templateUrl: './journalizing.component.html',
  styleUrls: ['./journalizing.component.css']
})
export class JournalizingComponent implements OnInit {
  ID: string | any;
  Day: number | any;
  Journal: Journalize_[] | undefined;

  JDate : string[] | any;
  JTime : String | any;
  JExplanation :String|undefined;
  JCredit : number|undefined;
  JRef_ : number|undefined;
  JDebit : number|undefined;

  Date: Date[] = [
    {value: '1',viewValue: '1 March'},
    {value: '2',viewValue: '2 March'},
    {value: '3',viewValue: '3 March'},
    {value: '4',viewValue: '4 March'},
    {value: '5',viewValue: '5 March'},
    {value: '6',viewValue: '6 March'},
    {value: '7',viewValue: '7 March'},
    {value: '8',viewValue: '8 March'},
    {value: '9',viewValue: '9 March'},
    {value: '10',viewValue: '10 March'},
    {value: '11',viewValue: '11 March'},
    {value: '12',viewValue: '12 March',},
    {value: '13',viewValue: '13 March'},
    {value: '14',viewValue: '14 March'},
    {value: '15',viewValue: '15 March'},
    {value: '16',viewValue: '16 March'},
    {value: '17',viewValue: '17 March'},
    {value: '18',viewValue: '18 March'},
    {value: '19',viewValue: '19 March'},
    {value: '20',viewValue: '20 March'},
    {value: '21',viewValue: '21 March'},
    {value: '22',viewValue: '22 March'},
    {value: '23',viewValue: '23 March'},
    {value: '24',viewValue: '24 March'},
    {value: '25',viewValue: '25 March'},
    {value: '26',viewValue: '26 March'},
    {value: '27',viewValue: '27 March'},
    {value: '28',viewValue: '28 March'},
    {value: '29',viewValue: '29 March'},
    {value: '30', viewValue:'30 March'},
    {value: '31',viewValue: '31 March'},
    {value: '32',viewValue: '1 April'},
  ];

  CompDate: string | undefined;
  CountJournal: number| any;



  constructor(private networkService: NetworkService, public datepipe: DatePipe) { }

  ngOnInit(): void {
    this.ID = loginID;
    // this.changeData();
    this.networkService.getTotalJournalize().subscribe((data) => {
      this.Journal = data.result;
      this.CountJournal = this.Journal?.length;

      console.log(this.CountJournal);
      for (let i = 0; i < this.CountJournal ; i++){

        this.JDate[i]  = this.datepipe.transform(data.result[i].Date, 'dd-MM-yyyy');
      }


      this.JTime = this.datepipe.transform(data.result[0].Time, 'hh:mm:ss');
      setTimeout(() => {
        console.log(this.JDate);
        console.log(this.JTime);

      }, 2000);

      // this.JDate =
      // this.JTime
      // this.JExplanation
      // this.JCredit
      // this.JRef_
      // this.JDebit

    });
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
    // console.log(e.target.value);
    this.CompDate = e.target.value;
    // console.log(this.CompDate);
  }

  // changeData() {
  //   this.networkService.getTotalJournalize().subscribe((data) => {
  //     this.Journal = data.result;
  //     this.CountJournal = this.Journal?.length;
  //     console.log(this.CountJournal);
  //     // for (let i = 0; i <= this.CountJournal ; i++){

  //     //   this.JDate[i] = this.datepipe.transform(data.result[i].Date, 'dd-MM-yyyy');
  //     // }


  //     this.JTime = this.datepipe.transform(data.result[0].Time, 'hh:mm:ss');

  //     console.log(this.JDate);
  //     console.log(this.JTime);

  //     // this.JDate =
  //     // this.JTime
  //     // this.JExplanation
  //     // this.JCredit
  //     // this.JRef_
  //     // this.JDebit

  //   });
  // }

}
interface Date {
  value: string;
  viewValue: string;
}



