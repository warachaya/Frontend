import {
  Component,
  OnInit
} from '@angular/core';
import {
  ChartOptions,
  ChartType,
  ChartDataSets
} from 'chart.js';
import {
  Label
} from 'ng2-charts';
import {
  WeekandMonth_
} from 'src/app/Models/Fillingweekandmonth';
import {
  NetworkService
} from 'src/app/Service/network.service';

import {
  getWAD,
  getWAG,
  getWNTSO,
  getWNTIWB,
  getWNTDie,
  getWNTGas,
  getWNTOWB,
  getWAWSO,
  getWAWIWB,
  getWAWDie,
  getWAWGas,
  getWAWOWB,
  getWNBSO,
  getWNBIWB,
  getWNBDie,
  getWNBGas,
  getWNBOWB,
  getWNFSO,
  getWNFIWB,
  getWNFDie,
  getWNFGas,
  getWNFOWB,
  getWNQSO,
  getWNQIWB,
  getWNQDie,
  getWNQGas,
  getWNQOWB,
  getWSUDie,
  getWSUSO,
  getWSUOWB,
  getWSUIWB,
  getWSUGas


} from 'src/app/Models/OPWeek';

import {
  getMAD,
  getMAG,
  getMNTSO,
  getMNTIWB,
  getMNTDie,
  getMNTGas,
  getMNTOWB,
  getMAWSO,
  getMAWIWB,
  getMAWDie,
  getMAWGas,
  getMAWOWB,
  getMNBSO,
  getMNBIWB,
  getMNBDie,
  getMNBGas,
  getMNBOWB,
  getMNFSO,
  getMNFIWB,
  getMNFDie,
  getMNFGas,
  getMNFOWB,
  getMNQSO,
  getMNQIWB,
  getMNQDie,
  getMNQGas,
  getMNQOWB,
  getMSUDie,
  getMSUSO,
  getMSUOWB,
  getMSUIWB,
  getMSUGas


} from 'src/app/Models/OPMonth';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';


const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-manager-dashboard',
  templateUrl: './manager-dashboard.component.html',
  styleUrls: ['./manager-dashboard.component.css']
})
export class ManagerDashboardComponent implements OnInit {
  ID: string | any;
  Date: Date[] = [{
      value: '1',
      viewValue: 'Week1'
    },
    {
      value: '2',
      viewValue: 'Week2'
    },
    {
      value: '3',
      viewValue: 'Week3'
    },
    {
      value: '4',
      viewValue: 'Week4'
    },
    // {
    //   value: '5',
    //   viewValue: 'Week5'
    // },
    {
      value: '6',
      viewValue: 'March'
    },

  ];

  DashData: WeekandMonth_[] | undefined;
  TruckIn: number | undefined;
  TruckOut: number | undefined;
  FillDiesel: number | undefined;
  FillGas: number | undefined;

  CompDate: string | undefined;
  CompID: number | any;

  WAD: getWAD[] | undefined;
  WAG: getWAG[] | undefined;
  WNTSO: getWNTSO[] | undefined;
  WNTIWB: getWNTIWB[] | undefined;
  WNTDie: getWNTDie[] | undefined;
  WNTGas: getWNTGas[] | undefined;
  WNTOWB: getWNTOWB[] | undefined;
  WAWSO: getWAWSO[] | undefined;
  WAWIWB: getWAWIWB[] | undefined;
  WAWDie: getWAWDie[] | undefined;
  WAWGas: getWAWGas[] | undefined;
  WAWOWB: getWAWOWB[] | undefined;
  WNBSO: getWNBSO[] | undefined;
  WNBIWB: getWNBIWB[] | undefined;
  WNBDie: getWNBDie[] | undefined;
  WNBGas: getWNBGas[] | undefined;
  WNBOWB: getWNBOWB[] | undefined;
  WNFSO: getWNFSO[] | undefined;
  WNFIWB: getWNFIWB[] | undefined;
  WNFDie: getWNFDie[] | undefined;
  WNFGas: getWNFGas[] | undefined;
  WNFOWB: getWNFOWB[] | undefined;
  WNQSO: getWNQSO[] | undefined;
  WNQIWB: getWNQIWB[] | undefined;
  WNQDie: getWNQDie[] | undefined;
  WNQGas: getWNQGas[] | undefined;
  WNQOWB: getWNQOWB[] | undefined;
  WSUSO: getWSUSO[] | undefined;
  WSUIWB: getWSUIWB[] | undefined;
  WSUDie: getWSUDie[] | undefined;
  WSUGas: getWSUGas[] | undefined;
  WSUOWB: getWSUOWB[] | undefined;

  reWAD: string | any;
  reWAG: string | any;
  reWNTSO: string | any;
  reWNTIWB: string | any;
  reWNTDie: string | any;
  reWNTGas: string | any;
  reWNTOWB: string | any;
  reWAWSO: string | any;
  reWAWIWB: string | any;
  reWAWDie: string | any;
  reWAWGas: string | any;
  reWAWOWB: string | any;
  reWNBSO: string | any;
  reWNBIWB: string | any;
  reWNBDie: string | any;
  reWNBGas: string | any;
  reWNBOWB: string | any;
  reWNFSO: string | any;
  reWNFIWB: string | any;
  reWNFDie: string | any;
  reWNFGas: string | any;
  reWNFOWB: string | any;
  reWNQSO: string | any;
  reWNQIWB: string | any;
  reWNQDie: string | any;
  reWNQGas: string | any;
  reWNQOWB: string | any;
  reWSUSO: string | any;
  reWSUIWB: string | any;
  reWSUDie: string | any;
  reWSUGas: string | any;
  reWSUOWB: string | any;

  Week: number | any;
  Month: number | any;

  MAD: getMAD[] | undefined;
  MAG: getMAG[] | undefined;
  MNTSO: getMNTSO[] | undefined;
  MNTIWB: getMNTIWB[] | undefined;
  MNTDie: getMNTDie[] | undefined;
  MNTGas: getMNTGas[] | undefined;
  MNTOWB: getMNTOWB[] | undefined;
  MAWSO: getMAWSO[] | undefined;
  MAWIWB: getMAWIWB[] | undefined;
  MAWDie: getMAWDie[] | undefined;
  MAWGas: getMAWGas[] | undefined;
  MAWOWB: getMAWOWB[] | undefined;
  MNBSO: getMNBSO[] | undefined;
  MNBIWB: getMNBIWB[] | undefined;
  MNBDie: getMNBDie[] | undefined;
  MNBGas: getMNBGas[] | undefined;
  MNBOWB: getMNBOWB[] | undefined;
  MNFSO: getMNFSO[] | undefined;
  MNFIWB: getMNFIWB[] | undefined;
  MNFDie: getMNFDie[] | undefined;
  MNFGas: getMNFGas[] | undefined;
  MNFOWB: getMNFOWB[] | undefined;
  MNQSO: getMNQSO[] | undefined;
  MNQIWB: getMNQIWB[] | undefined;
  MNQDie: getMNQDie[] | undefined;
  MNQGas: getMNQGas[] | undefined;
  MNQOWB: getMNQOWB[] | undefined;
  MSUSO: getMSUSO[] | undefined;
  MSUIWB: getMSUIWB[] | undefined;
  MSUDie: getMSUDie[] | undefined;
  MSUGas: getMSUGas[] | undefined;
  MSUOWB: getMSUOWB[] | undefined;

  reMAD: string | any;
  reMAG: string | any;
  reMNTSO: string | any;
  reMNTIWB: string | any;
  reMNTDie: string | any;
  reMNTGas: string | any;
  reMNTOWB: string | any;
  reMAWSO: string | any;
  reMAWIWB: string | any;
  reMAWDie: string | any;
  reMAWGas: string | any;
  reMAWOWB: string | any;
  reMNBSO: string | any;
  reMNBIWB: string | any;
  reMNBDie: string | any;
  reMNBGas: string | any;
  reMNBOWB: string | any;
  reMNFSO: string | any;
  reMNFIWB: string | any;
  reMNFDie: string | any;
  reMNFGas: string | any;
  reMNFOWB: string | any;
  reMNQSO: string | any;
  reMNQIWB: string | any;
  reMNQDie: string | any;
  reMNQGas: string | any;
  reMNQOWB: string | any;
  reMSUSO: string | any;
  reMSUIWB: string | any;
  reMSUDie: string | any;
  reMSUGas: string | any;
  reMSUOWB: string | any;




  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.changeData();
    this.ID = loginID;
    this.Week = 0;



  }
  barChartOptions: any;
  barChartData: ChartDataSets[] = []
  barChartLegend: any;
  barChartLabels: Label[] = []
  barChartType: any;
  barChartPlugins: any;

  form1 = new FormGroup({
    website: new FormControl('', Validators.required),
  });

  get f() {
    return this.form1.controls;
  }

  submit() {
    console.log(this.form1.value);
  }
  changeWebsite(e: any) {
    // console.log(e.target.value);
    this.CompDate = e.target.value;
    console.log(this.CompDate);

  }


  changeData() {
    this.networkService.getTransac2().subscribe((data) => {
      this.DashData = data.result;

      console.log(this.DashData);
      this.TruckIn = data.result[0].C_Truck_In;
      this.TruckOut = data.result[0].Truck_Out;
      this.FillDiesel = data.result[0].Amount_of_Fuel_diesel_;
      this.FillGas = data.result[0].Amount_of_Fuel_gasohol95_;
      // console.log(this.Date[5].viewValue )


      for (let i = 0; i <= 4; i++) {
        if (this.CompDate == this.Date[i].viewValue ) {
          // console.log(this.Date[i].viewValue);
          // console.log(this.Date[i - 1].viewValue);
          this.TruckIn = data.result[i - 1].C_Truck_In;
          // console.log(this.TruckIn);
          this.TruckOut = data.result[i - 1].Truck_Out;
          // console.log(this.TruckOut);
          this.FillDiesel = data.result[i - 1].Amount_of_Fuel_diesel_;


          // console.log(this.FillDiesel);
          this.FillGas = data.result[i - 1].Amount_of_Fuel_gasohol95_;

          // console.log(this.FillGas);
          this.Week = i
          console.log(this.Week);
        }
        else if (this.Date[i].viewValue == "March"){
          this.Month = 6
          this.TruckIn = data.result[5].C_Truck_In;
          // console.log(this.TruckIn);
          this.TruckOut = data.result[5].Truck_Out;
          // console.log(this.TruckOut);
          this.FillDiesel = data.result[5].Amount_of_Fuel_diesel_;


          // console.log(this.FillDiesel);
          this.FillGas = data.result[5].Amount_of_Fuel_gasohol95_;
        }

      }
      this.networkService.getWAD().subscribe((data) => {
        this.WAD = data.result[this.Week].Item1;
        // console.log(data.result.Item1)
        this.reWAD = Number(this.WAD).toFixed(2);

        this.networkService.getWAG().subscribe((data) => {
          this.WAG = data.result[this.Week].Item1;
          this.reWAG = Number(this.WAG).toFixed(2);

          this.networkService.getWNTSO().subscribe((data) => {
            this.WNTSO = data.result[this.Week].Item1;
            this.reWNTSO = Number(this.WNTSO).toFixed(2);

            this.networkService.getWNTIWB().subscribe((data) => {
              this.WNTIWB = data.result[this.Week].Item1;
              this.reWNTIWB = Number(this.WNTIWB).toFixed(2);

              this.networkService.getWNTDie().subscribe((data) => {
                this.WNTDie = data.result[this.Week].Item1;
                this.reWNTDie = Number(this.WNTDie).toFixed(2);

                this.networkService.getWNTGas().subscribe((data) => {
                  this.WNTGas = data.result[this.Week].Item1;
                  this.reWNTGas = Number(this.WNTGas).toFixed(2);

                  this.networkService.getWNTOWB().subscribe((data) => {
                    this.WNTOWB = data.result[this.Week].Item1;
                    this.reWNTOWB = Number(this.WNTOWB).toFixed(2);

                    this.networkService.getWAWSO().subscribe((data) => {
                      this.WAWSO = data.result[this.Week].Item1;
                      this.reWAWSO = Number(this.WAWSO).toFixed(2);

                      this.networkService.getWAWIWB().subscribe((data) => {
                        this.WAWIWB = data.result[this.Week].Item1;
                        this.reWAWIWB = Number(this.WAWIWB).toFixed(2);

                        this.networkService.getWAWDie().subscribe((data1) => {
                          this.WAWDie = data1.result[this.Week].Item1;
                          this.reWAWDie = Number(this.WAWDie).toFixed(2);

                          this.networkService.getWAWGas().subscribe((data11) => {
                            this.WAWGas = data.result[this.Week].Item1;
                            this.reWAWGas = Number(this.WAWGas).toFixed(2);

                            this.networkService.getWAWOWB().subscribe((data) => {
                              this.WAWOWB = data.result[this.Week].Item1;
                              this.reWAWOWB = Number(this.WAWOWB).toFixed(2);

                              this.networkService.getWNBSO().subscribe((data) => {
                                this.WNBSO = data.result[this.Week].Item1;
                                this.reWNBSO = Number(this.WNBSO).toFixed(2);

                                this.networkService.getWNBIWB().subscribe((data) => {
                                  this.WNBIWB = data.result[this.Week].Item1;
                                  this.reWNBIWB = Number(this.WNBIWB).toFixed(2);

                                  this.networkService.getWNBDie().subscribe((data) => {
                                    this.WNBDie = data.result[this.Week].Item1;
                                    this.reWNBDie = Number(this.WNBDie).toFixed(2);

                                    this.networkService.getWNBGas().subscribe((data) => {
                                      this.WNBGas = data.result[this.Week].Item1;
                                      this.reWNBGas = Number(this.WNBGas).toFixed(2);

                                      this.networkService.getWNBOWB().subscribe((data) => {
                                        this.WNBOWB = data.result[this.Week].Item1;
                                        this.reWNBOWB = Number(this.WNBOWB).toFixed(2);

                                        this.networkService.getWNFSO().subscribe((data) => {
                                          this.WNFSO = data.result[this.Week].Item1;
                                          this.reWNFSO = Number(this.WNFSO).toFixed(2);

                                          this.networkService.getWNFIWB().subscribe((data) => {
                                            this.WNFIWB = data.result[this.Week].Item1;
                                            this.reWNFIWB = Number(this.WNFIWB).toFixed(2);

                                            this.networkService.getWNFDie().subscribe((data) => {
                                              this.WNFDie = data.result[this.Week].Item1;
                                              this.reWNFDie = Number(this.WNFDie).toFixed(2);

                                              this.networkService.getWNFGas().subscribe((data) => {
                                                this.WNFGas = data.result[this.Week].Item1;
                                                this.reWNFGas = Number(this.WNFGas).toFixed(2);

                                                this.networkService.getWNFOWB().subscribe((data) => {
                                                  this.WNFOWB = data.result[this.Week].Item1;
                                                  this.reWNFOWB = Number(this.WNFOWB).toFixed(2);

                                                  this.networkService.getWSUSO().subscribe((data) => {
                                                    this.WSUSO = data.result[this.Week].Item1;
                                                    this.reWSUSO = Number(this.WSUSO).toFixed(2);

                                                    this.networkService.getWSUIWB().subscribe((data) => {
                                                      this.WSUIWB = data.result[this.Week].Item1;
                                                      this.reWSUIWB = Number(this.WSUIWB).toFixed(2);

                                                      this.networkService.getWSUDie().subscribe((data) => {
                                                        this.WSUDie = data.result[this.Week].Item1;
                                                        this.reWSUDie = Number(this.WSUDie).toFixed(2);

                                                        this.networkService.getWSUGas().subscribe((data) => {
                                                          this.WSUGas = data.result[this.Week].Item1;
                                                          this.reWSUGas = Number(this.WSUGas).toFixed(2);

                                                          this.networkService.getWSUOWB().subscribe((data) => {
                                                            this.WSUOWB = data.result[2].Item1;
                                                            this.reWSUOWB = Number(this.WSUOWB).toFixed(2);

                                                            this.networkService.getMAD().subscribe((data) => {
                                                              this.MAD = data.result[2].Item1;
                                                              // console.log(data.result.Item1)
                                                              this.reMAD = Number(this.MAD).toFixed(2);

                                                              this.networkService.getMAG().subscribe((data) => {
                                                                this.MAG = data.result[2].Item1;
                                                                this.reMAG = Number(this.MAG).toFixed(2);

                                                                this.networkService.getMNTSO().subscribe((data) => {
                                                                  this.MNTSO = data.result[2].Item1;
                                                                  this.reMNTSO = Number(this.MNTSO).toFixed(2);

                                                                  this.networkService.getMNTIWB().subscribe((data) => {
                                                                    this.MNTIWB = data.result[2].Item1;
                                                                    this.reMNTIWB = Number(this.MNTIWB).toFixed(2);

                                                                    this.networkService.getMNTDie().subscribe((data) => {
                                                                      this.MNTDie = data.result[2].Item1;
                                                                      this.reMNTDie = Number(this.MNTDie).toFixed(2);

                                                                      this.networkService.getMNTGas().subscribe((data) => {
                                                                        this.MNTGas = data.result[2].Item1;
                                                                        this.reMNTGas = Number(this.MNTGas).toFixed(2);

                                                                        this.networkService.getMNTOWB().subscribe((data) => {
                                                                          this.MNTOWB = data.result[2].Item1;
                                                                          this.reMNTOWB = Number(this.MNTOWB).toFixed(2);

                                                                          this.networkService.getMAWSO().subscribe((data) => {
                                                                            this.MAWSO = data.result[2].Item1;
                                                                            this.reMAWSO = Number(this.MAWSO).toFixed(2);

                                                                            this.networkService.getMAWIWB().subscribe((data) => {
                                                                              this.MAWIWB = data.result[2].Item1;
                                                                              this.reMAWIWB = Number(this.MAWIWB).toFixed(2);

                                                                              this.networkService.getMAWDie().subscribe((data1) => {
                                                                                this.MAWDie = data1.result[2].Item1;
                                                                                this.reMAWDie = Number(this.MAWDie).toFixed(2);

                                                                                this.networkService.getMAWGas().subscribe((data11) => {
                                                                                  this.MAWGas = data.result[2].Item1;
                                                                                  this.reMAWGas = Number(this.MAWGas).toFixed(2);

                                                                                  this.networkService.getMAWOWB().subscribe((data) => {
                                                                                    this.MAWOWB = data.result[2].Item1;
                                                                                    this.reMAWOWB = Number(this.MAWOWB).toFixed(2);

                                                                                    this.networkService.getMNBSO().subscribe((data) => {
                                                                                      this.MNBSO = data.result[2].Item1;
                                                                                      this.reMNBSO = Number(this.MNBSO).toFixed(2);

                                                                                      this.networkService.getMNBIWB().subscribe((data) => {
                                                                                        this.MNBIWB = data.result[2].Item1;
                                                                                        this.reMNBIWB = Number(this.MNBIWB).toFixed(2);

                                                                                        this.networkService.getMNBDie().subscribe((data) => {
                                                                                          this.MNBDie = data.result[2].Item1;
                                                                                          this.reMNBDie = Number(this.MNBDie).toFixed(2);

                                                                                          this.networkService.getMNBGas().subscribe((data) => {
                                                                                            this.MNBGas = data.result[2].Item1;
                                                                                            this.reMNBGas = Number(this.MNBGas).toFixed(2);

                                                                                            this.networkService.getMNBOWB().subscribe((data) => {
                                                                                              this.MNBOWB = data.result[2].Item1;
                                                                                              this.reMNBOWB = Number(this.MNBOWB).toFixed(2);

                                                                                              this.networkService.getMNFSO().subscribe((data) => {
                                                                                                this.MNFSO = data.result[2].Item1;
                                                                                                this.reMNFSO = Number(this.MNFSO).toFixed(2);

                                                                                                this.networkService.getMNFIWB().subscribe((data) => {
                                                                                                  this.MNFIWB = data.result[2].Item1;
                                                                                                  this.reMNFIWB = Number(this.MNFIWB).toFixed(2);

                                                                                                  this.networkService.getMNFDie().subscribe((data) => {
                                                                                                    this.MNFDie = data.result[2].Item1;
                                                                                                    this.reMNFDie = Number(this.MNFDie).toFixed(2);

                                                                                                    this.networkService.getMNFGas().subscribe((data) => {
                                                                                                      this.MNFGas = data.result[2].Item1;
                                                                                                      this.reMNFGas = Number(this.MNFGas).toFixed(2);

                                                                                                      this.networkService.getMNFOWB().subscribe((data) => {
                                                                                                        this.MNFOWB = data.result[2].Item1;
                                                                                                        this.reMNFOWB = Number(this.MNFOWB).toFixed(2);

                                                                                                        this.networkService.getMSUSO().subscribe((data) => {
                                                                                                          this.MSUSO = data.result[2].Item1;
                                                                                                          this.reMSUSO = Number(this.MSUSO).toFixed(2);

                                                                                                          this.networkService.getMSUIWB().subscribe((data) => {
                                                                                                            this.MSUIWB = data.result[2].Item1;
                                                                                                            this.reMSUIWB = Number(this.MSUIWB).toFixed(2);

                                                                                                            this.networkService.getMSUDie().subscribe((data) => {
                                                                                                              this.MSUDie = data.result[2].Item1;
                                                                                                              this.reMSUDie = Number(this.MSUDie).toFixed(2);

                                                                                                              this.networkService.getMSUGas().subscribe((data) => {
                                                                                                                this.MSUGas = data.result[2].Item1;
                                                                                                                this.reMSUGas = Number(this.MSUGas).toFixed(2);

                                                                                                                this.networkService.getMSUOWB().subscribe((data) => {
                                                                                                                  this.MSUOWB = data.result[2].Item1;
                                                                                                                  this.reMSUOWB = Number(this.MSUOWB).toFixed(2);


                                                                                                                  if (this.Week < 4 ){
                                                                                                                  this.barChartOptions = {
                                                                                                                    responsive: true,
                                                                                                                  };
                                                                                                                  this.barChartLabels = [
                                                                                                                    'SaleOffice',
                                                                                                                    'Inbound WB',
                                                                                                                    'Diesel Bay',
                                                                                                                    'Gasohol Bay',
                                                                                                                    'Outbound WB',
                                                                                                                  ];

                                                                                                                  this.barChartType = 'bar';
                                                                                                                  this.barChartLegend = true;
                                                                                                                  this.barChartPlugins = [];

                                                                                                                  this.barChartData = [

                                                                                                                    {
                                                                                                                      data: [this.reWNTSO,this.reWNTIWB,this.reWNTDie,this.reWNTGas,this.reWNTOWB],

                                                                                                                      label: 'WIP',
                                                                                                                      backgroundColor: 'rgba(223, 255, 0, 1)',
                                                                                                                      // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                    },
                                                                                                                    {
                                                                                                                      data: [this.reWNQSO,this.reWNQIWB,this.reWNQDie,this.reWNQGas,this.reWNQOWB],
                                                                                                                      label: 'Queue',
                                                                                                                      backgroundColor: 'rgba(255, 191, 0, 1)',
                                                                                                                      // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                    },
                                                                                                                    {
                                                                                                                      data: [this.reWNBSO,this.reWNBIWB,this.reWNBDie,this.reWNBGas,this.reWNBOWB],
                                                                                                                      label: 'Busy',
                                                                                                                      backgroundColor: 'rgba(255, 127, 80, 1)',
                                                                                                                      // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                    },
                                                                                                                    {
                                                                                                                      data: [ this.reWAWSO, this.reWAWIWB,this.reWAWDie,this.reWAWGas,this.reWAWOWB,],
                                                                                                                      label: 'Waiting',
                                                                                                                      backgroundColor: 'rgba(100, 149, 237, 1)',
                                                                                                                      // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                    },
                                                                                                                    {
                                                                                                                      data: [this.reWNFSO,this.reWNFIWB,this.reWNFDie,this.reWNFGas,this.reWNFOWB],
                                                                                                                      label: 'Fail',
                                                                                                                      backgroundColor: 'rgba(159, 226, 191, 1)',
                                                                                                                      // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                    },
                                                                                                                    {
                                                                                                                      data: [this.reWSUSO,this.reWSUIWB,this.reWSUDie,this.reWSUGas,this.reWSUOWB],
                                                                                                                      label: 'Scheduled Utilization',
                                                                                                                      backgroundColor: 'rgba(204, 204, 255, 1)',
                                                                                                                      // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                    },
                                                                                                                  ];
                                                                                                                  }
                                                                                                                  else if (this.Month = 6){
                                                                                                                    this.barChartOptions = {
                                                                                                                      responsive: true,
                                                                                                                    };
                                                                                                                    this.barChartLabels = [
                                                                                                                      'SaleOffice',
                                                                                                                      'Inbound WB',
                                                                                                                      'Diesel Bay',
                                                                                                                      'Gasohol Bay',
                                                                                                                      'Outbound WB',
                                                                                                                    ];

                                                                                                                    this.barChartType = 'bar';
                                                                                                                    this.barChartLegend = true;
                                                                                                                    this.barChartPlugins = [];

                                                                                                                    this.barChartData = [

                                                                                                                      {
                                                                                                                        data: [this.reMNTSO,this.reMNTIWB,this.reMNTDie,this.reMNTGas,this.reMNTOWB],

                                                                                                                        label: 'WIP',
                                                                                                                        backgroundColor: 'rgba(223, 255, 0, 1)',
                                                                                                                        // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                      },
                                                                                                                      {
                                                                                                                        data: [this.reMNQSO,this.reMNQIWB,this.reMNQDie,this.reMNQGas,this.reMNQOWB],
                                                                                                                        label: 'Queue',
                                                                                                                        backgroundColor: 'rgba(255, 191, 0, 1)',
                                                                                                                        // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                      },
                                                                                                                      {
                                                                                                                        data: [this.reMNBSO,this.reMNBIWB,this.reMNBDie,this.reMNBGas,this.reMNBOWB],
                                                                                                                        label: 'Busy',
                                                                                                                        backgroundColor: 'rgba(255, 127, 80, 1)',
                                                                                                                        // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                      },
                                                                                                                      {
                                                                                                                        data: [ this.reMAWSO, this.reMAWIWB,this.reMAWDie,this.reMAWGas,this.reMAWOWB,],
                                                                                                                        label: 'Waiting',
                                                                                                                        backgroundColor: 'rgba(100, 149, 237, 1)',
                                                                                                                        // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                      },
                                                                                                                      {
                                                                                                                        data: [this.MNFSO,this.reMNFIWB,this.reMNFDie,this.reMNFGas,this.reMNFOWB],
                                                                                                                        label: 'Fail',
                                                                                                                        backgroundColor: 'rgba(159, 226, 191, 1)',
                                                                                                                        // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                      },
                                                                                                                      {
                                                                                                                        data: [this.reMSUSO,this.reMSUIWB,this.reMSUDie,this.reMSUGas,this.reMSUOWB],
                                                                                                                        label: 'Scheduled Utilization',
                                                                                                                        backgroundColor: 'rgba(204, 204, 255, 1)',
                                                                                                                        // borderColor: "rgba(219, 0, 0, 1)"
                                                                                                                      },
                                                                                                                    ];

                                                                                                                  }
                                                                                                                });
                                                                                                              });
                                                                                                            });
                                                                                                          });
                                                                                                        });
                                                                                                      });
                                                                                                    });
                                                                                                  });
                                                                                                });
                                                                                              });
                                                                                            });
                                                                                          });
                                                                                        });
                                                                                      });
                                                                                    });
                                                                                  });
                                                                                });
                                                                              });
                                                                            });
                                                                          });
                                                                        });
                                                                      });
                                                                    });
                                                                  });
                                                                });
                                                              });
                                                            });
                                                          });
                                                          });
                                                        });
                                                      });
                                                    });
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

  }
}


interface Date {
  value: String;
  viewValue: string;
}
