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

  Day: number | any;



  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.changeData();
    this.ID = loginID;
    this.Day = 0;



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
          // console.log(this.CompDate);
          // console.log(this.Date[i - 1].viewValue);
          this.TruckIn = data.result[i - 1].C_Truck_In;
          // console.log(this.TruckIn);
          this.TruckOut = data.result[i - 1].Truck_Out;
          // console.log(this.TruckOut);
          this.FillDiesel = data.result[i - 1].Amount_of_Fuel_diesel_;


          // console.log(this.FillDiesel);
          this.FillGas = data.result[i - 1].Amount_of_Fuel_gasohol95_;

          // console.log(this.FillGas);
          this.Day = i
          console.log(this.Day);
        }

      }
      this.networkService.getWAD().subscribe((data) => {
        this.WAD = data.result[this.Day].Item1;
        // console.log(data.result.Item1)
        this.reWAD = Number(this.WAD).toFixed(2);

        this.networkService.getWAG().subscribe((data) => {
          this.WAG = data.result[this.Day].Item1;
          this.reWAG = Number(this.WAG).toFixed(2);

          this.networkService.getWNTSO().subscribe((data) => {
            this.WNTSO = data.result[this.Day].Item1;
            this.reWNTSO = Number(this.WNTSO).toFixed(2);

            this.networkService.getWNTIWB().subscribe((data) => {
              this.WNTIWB = data.result[this.Day].Item1;
              this.reWNTIWB = Number(this.WNTIWB).toFixed(2);

              this.networkService.getWNTDie().subscribe((data) => {
                this.WNTDie = data.result[this.Day].Item1;
                this.reWNTDie = Number(this.WNTDie).toFixed(2);

                this.networkService.getWNTGas().subscribe((data) => {
                  this.WNTGas = data.result[this.Day].Item1;
                  this.reWNTGas = Number(this.WNTGas).toFixed(2);

                  this.networkService.getWNTOWB().subscribe((data) => {
                    this.WNTOWB = data.result[this.Day].Item1;
                    this.reWNTOWB = Number(this.WNTOWB).toFixed(2);

                    this.networkService.getWAWSO().subscribe((data) => {
                      this.WAWSO = data.result[this.Day].Item1;
                      this.reWAWSO = Number(this.WAWSO).toFixed(2);

                      this.networkService.getWAWIWB().subscribe((data) => {
                        this.WAWIWB = data.result[this.Day].Item1;
                        this.reWAWIWB = Number(this.WAWIWB).toFixed(2);

                        this.networkService.getWAWDie().subscribe((data1) => {
                          this.WAWDie = data1.result[this.Day].Item1;
                          this.reWAWDie = Number(this.WAWDie).toFixed(2);

                          this.networkService.getWAWGas().subscribe((data11) => {
                            this.WAWGas = data.result[this.Day].Item1;
                            this.reWAWGas = Number(this.WAWGas).toFixed(2);

                            this.networkService.getWAWOWB().subscribe((data) => {
                              this.WAWOWB = data.result[this.Day].Item1;
                              this.reWAWOWB = Number(this.WAWOWB).toFixed(2);

                              this.networkService.getWNBSO().subscribe((data) => {
                                this.WNBSO = data.result[this.Day].Item1;
                                this.reWNBSO = Number(this.WNBSO).toFixed(2);

                                this.networkService.getWNBIWB().subscribe((data) => {
                                  this.WNBIWB = data.result[this.Day].Item1;
                                  this.reWNBIWB = Number(this.WNBIWB).toFixed(2);

                                  this.networkService.getWNBDie().subscribe((data) => {
                                    this.WNBDie = data.result[this.Day].Item1;
                                    this.reWNBDie = Number(this.WNBDie).toFixed(2);

                                    this.networkService.getWNBGas().subscribe((data) => {
                                      this.WNBGas = data.result[this.Day].Item1;
                                      this.reWNBGas = Number(this.WNBGas).toFixed(2);

                                      this.networkService.getWNBOWB().subscribe((data) => {
                                        this.WNBOWB = data.result[this.Day].Item1;
                                        this.reWNBOWB = Number(this.WNBOWB).toFixed(2);

                                        this.networkService.getWNFSO().subscribe((data) => {
                                          this.WNFSO = data.result[this.Day].Item1;
                                          this.reWNFSO = Number(this.WNFSO).toFixed(2);

                                          this.networkService.getWNFIWB().subscribe((data) => {
                                            this.WNFIWB = data.result[this.Day].Item1;
                                            this.reWNFIWB = Number(this.WNFIWB).toFixed(2);

                                            this.networkService.getWNFDie().subscribe((data) => {
                                              this.WNFDie = data.result[this.Day].Item1;
                                              this.reWNFDie = Number(this.WNFDie).toFixed(2);

                                              this.networkService.getWNFGas().subscribe((data) => {
                                                this.WNFGas = data.result[this.Day].Item1;
                                                this.reWNFGas = Number(this.WNFGas).toFixed(2);

                                                this.networkService.getWNFOWB().subscribe((data) => {
                                                  this.WNFOWB = data.result[this.Day].Item1;
                                                  this.reWNFOWB = Number(this.WNFOWB).toFixed(2);

                                                  this.networkService.getWSUSO().subscribe((data) => {
                                                    this.WSUSO = data.result[this.Day].Item1;
                                                    this.reWSUSO = Number(this.WSUSO).toFixed(2);

                                                    this.networkService.getWSUIWB().subscribe((data) => {
                                                      this.WSUIWB = data.result[this.Day].Item1;
                                                      this.reWSUIWB = Number(this.WSUIWB).toFixed(2);

                                                      this.networkService.getWSUDie().subscribe((data) => {
                                                        this.WSUDie = data.result[this.Day].Item1;
                                                        this.reWSUDie = Number(this.WSUDie).toFixed(2);

                                                        this.networkService.getWSUGas().subscribe((data) => {
                                                          this.WSUGas = data.result[this.Day].Item1;
                                                          this.reWSUGas = Number(this.WSUGas).toFixed(2);

                                                          this.networkService.getWSUOWB().subscribe((data) => {
                                                            this.WSUOWB = data.result[this.Day].Item1;
                                                            this.reWSUOWB = Number(this.WSUOWB).toFixed(2);


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
  value: string;
  viewValue: string;
}
