import { Component, OnInit } from '@angular/core';

import { NetworkService } from 'src/app/Service/network.service';

import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';

import { Label } from 'ng2-charts';

import { Daily_ } from 'src/app/Models/FillingDaily';


import {
  getDAD,
  getDAG,
  getDNTSO,
  getDNTIWB,
  getDNTDie,
  getDNTGas,
  getDNTOWB,
  getDAWSO,
  getDAWIWB,
  getDAWDie,
  getDAWGas,
  getDAWOWB,
  getDNBSO,
  getDNBIWB,
  getDNBDie,
  getDNBGas,
  getDNBOWB,
  getDNFSO,
  getDNFIWB,
  getDNFDie,
  getDNFGas,
  getDNFOWB,
  getDNQSO,
  getDNQIWB,
  getDNQDie,
  getDNQGas,
  getDNQOWB,

} from 'src/app/Models/OpDaily';

import { FormGroup, FormControl, Validators } from '@angular/forms';

const loginID = localStorage.getItem('ID');

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  DashData: Daily_[] | undefined;
  TruckIn: number | undefined;
  TruckOut: number | undefined;
  FillDiesel: number | undefined;
  FillGas: number | undefined;
  CompDate: string | undefined;

  DAD: getDAD[] | undefined;
  DAG: getDAG[] | undefined;
  DNTSO: getDNTSO[] | undefined;
  DNTIWB: getDNTIWB[] | undefined;
  DNTDie: getDNTDie[] | undefined;
  DNTGas: getDNTGas[] | undefined;
  DNTOWB: getDNTOWB[] | undefined;
  DAWSO: getDAWSO[] | undefined;
  DAWIWB: getDAWIWB[] | undefined;
  DAWDie: getDAWDie[] | undefined;
  DAWGas: getDAWGas[] | undefined;
  DAWOWB: getDAWOWB[] | undefined;
  DNBSO: getDNBSO[] | undefined;
  DNBIWB: getDNBIWB[] | undefined;
  DNBDie: getDNBDie[] | undefined;
  DNBGas: getDNBGas[] | undefined;
  DNBOWB: getDNBOWB[] | undefined;
  DNFSO: getDNFSO[] | undefined;
  DNFIWB: getDNFIWB[] | undefined;
  DNFDie: getDNFDie[] | undefined;
  DNFGas: getDNFGas[] | undefined;
  DNFOWB: getDNFOWB[] | undefined;
  DNQSO: getDNQSO[] | undefined;
  DNQIWB: getDNQIWB[] | undefined;
  DNQDie: getDNQDie[] | undefined;
  DNQGas: getDNQGas[] | undefined;
  DNQOWB: getDNQOWB[] | undefined;

  reDAD: string | any;
  reDAG: string | any;
  reDNTSO: string | any;
  reDNTIWB: string | any;
  reDNTDie: string | any;
  reDNTGas: string | any;
  reDNTOWB: string | any;
  reDAWSO: string | any;
  reDAWIWB: string | any;
  reDAWDie: string | any;
  reDAWGas: string | any;
  reDAWOWB: string | any;
  reDNBSO: string | any;
  reDNBIWB: string | any;
  reDNBDie:string | any;
  reDNBGas: string | any;
  reDNBOWB: string | any;
  reDNFSO: string | any;
  reDNFIWB: string | any;
  reDNFDie: string | any;
  reDNFGas: string | any;
  reDNFOWB: string | any;
  reDNQSO: string | any;
  reDNQIWB: string | any;
  reDNQDie: string | any;
  reDNQGas: string | any;
  reDNQOWB: string | any;


  Day: number | any;
  ID: string | any;
  // msg: string | any;

  Date: Date[] = [
    {
      value: '1',
      viewValue: '1 March',
    },

    {
      value: '2',
      viewValue: '2 March',
    },

    {
      value: '3',
      viewValue: '3 March',
    },

    {
      value: '4',
      viewValue: '4 March',
    },

    {
      value: '5',
      viewValue: '5 March',
    },

    {
      value: '6',
      viewValue: '6 March',
    },

    {
      value: '7',
      viewValue: '7 March',
    },

    {
      value: '8',
      viewValue: '8 March',
    },

    {
      value: '9',
      viewValue: '9 March',
    },

    {
      value: '10',
      viewValue: '10 March',
    },

    {
      value: '11',
      viewValue: '11 March',
    },

    {
      value: '12',
      viewValue: '12 March',
    },

    {
      value: '13',
      viewValue: '13 March',
    },

    {
      value: '14',
      viewValue: '14 March',
    },

    {
      value: '15',
      viewValue: '15 March',
    },

    {
      value: '16',
      viewValue: '16 March',
    },

    {
      value: '17',
      viewValue: '17 March',
    },

    {
      value: '18',
      viewValue: '18 March',
    },

    {
      value: '19',
      viewValue: '19 March',
    },

    {
      value: '20',
      viewValue: '20 March',
    },

    {
      value: '21',
      viewValue: '21 March',
    },

    {
      value: '22',
      viewValue: '22 March',
    },

    {
      value: '23',
      viewValue: '23 March',
    },

    {
      value: '24',
      viewValue: '24 March',
    },

    {
      value: '25',
      viewValue: '25 March',
    },

    {
      value: '26',
      viewValue: '26 March',
    },

    {
      value: '27',
      viewValue: '27 March',
    },

    {
      value: '28',
      viewValue: '28 March',
    },

    {
      value: '29',
      viewValue: '29 March',
    },

    {
      value: '30',
      viewValue: '30 March',
    },

    {
      value: '31',
      viewValue: '31 March',
    },

    {
      value: '32',
      viewValue: '1 April',
    },
  ];

  constructor(private networkService: NetworkService) {}

  ngOnInit(): void {
    this.changeData();
    this.ID = loginID;
    this.Day = 0;


  }

  barChartOptions: any;
  barChartData : ChartDataSets[] = []
  barChartLegend : any;
  barChartLabels: Label[] = []
  barChartType: any;
  barChartPlugins: any;


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

  changeData() {
    this.networkService.getTransac().subscribe((data) => {
      this.DashData = data.result;

      console.log(this.DashData);
      this.TruckIn = data.result[0].C_Truck_In;
      this.TruckOut = data.result[0].Truck_Out;
      this.FillDiesel = data.result[0].Amount_of_Fuel_diesel_;
      this.FillGas = data.result[0].Amount_of_Fuel_gasohol95_;


      for (let i = 1; i <= 32; i++) {
        if (this.CompDate == this.Date[i - 1].viewValue) {
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
          this.Day = (i-1)*2
          console.log(this.Day);
        }
      }
      this.networkService.getDAD().subscribe((data) => {
        this.DAD = data.result[this.Day].Item1;
        this.reDAD = Number(this.DAD).toFixed(2);

        this.networkService.getDAG().subscribe((data) => {
          this.DAG = data.result[this.Day].Item1;
          this.reDAG = Number(this.DAG).toFixed(2);

          this.networkService.getDNTSO().subscribe((data) => {
            this.DNTSO = data.result[this.Day].Item1;
            this.reDNTSO = Number(this.DNTSO).toFixed(2);

            this.networkService.getDNTIWB().subscribe((data) => {
              this.DNTIWB = data.result[this.Day].Item1;
              this.reDNTIWB = Number(this.DNTIWB).toFixed(2);

              this.networkService.getDNTDie().subscribe((data) => {
                this.DNTDie = data.result[this.Day].Item1;
                this.reDNTDie = Number(this.DNTDie).toFixed(2);

                this.networkService.getDNTGas().subscribe((data) => {
                  this.DNTGas = data.result[this.Day].Item1;
                  this.reDNTGas = Number(this.DNTGas).toFixed(2);

                  this.networkService.getDNTOWB().subscribe((data) => {
                    this.DNTOWB = data.result[this.Day].Item1;
                    this.reDNTOWB = Number(this.DNTOWB).toFixed(2);

                    this.networkService.getDAWSO().subscribe((data) => {
                      this.DAWSO = data.result[this.Day].Item1;
                      this.reDAWSO = Number(this.DAWSO).toFixed(2);

                      this.networkService.getDAWIWB().subscribe((data) => {
                        this.DAWIWB = data.result[this.Day].Item1;
                        this.reDAWIWB =Number(this.DAWIWB).toFixed(2);

                        this.networkService.getDAWDie().subscribe((data1) => {
                          this.DAWDie = data1.result[this.Day].Item1;
                          this.reDAWDie = Number(this.DAWDie).toFixed(2);

                          this.networkService.getDAWGas().subscribe((data11) => {
                            this.DAWGas = data.result[this.Day].Item1;
                            this.reDAWGas = Number(this.DAWGas).toFixed(2);

                            this.networkService.getDAWOWB().subscribe((data) => {
                              this.DAWOWB = data.result[this.Day].Item1;
                              this.reDAWOWB = Number(this.DAWOWB).toFixed(2);

                              this.networkService.getDNBSO().subscribe((data) => {
                                this.DNBSO = data.result[this.Day].Item1;
                                this.reDNBSO = Number(this.DNBSO).toFixed(2);

                                  this.networkService.getDNBIWB().subscribe((data) => {
                                    this.DNBIWB = data.result[this.Day].Item1;
                                    this.reDNBIWB = Number(this.DNBIWB).toFixed(2);

                                    this.networkService.getDNBDie().subscribe((data) => {
                                      this.DNBDie = data.result[this.Day].Item1;
                                      this.reDNBDie = Number(this.DNBDie).toFixed(2);

                                      this.networkService.getDNBGas().subscribe((data) => {
                                        this.DNBGas = data.result[this.Day].Item1;
                                        this.reDNBGas = Number(this.DNBGas).toFixed(2);

                                        this.networkService.getDNBOWB().subscribe((data) => {
                                          this.DNBOWB = data.result[this.Day].Item1;
                                          this.reDNBOWB = Number(this.DNBOWB).toFixed(2);

                                          this.networkService.getDNFSO().subscribe((data) => {
                                            this.DNFSO = data.result[this.Day].Item1;
                                            this.reDNFSO = Number(this.DNFSO).toFixed(2);

                                            this.networkService.getDNFIWB().subscribe((data) => {
                                              this.DNFIWB = data.result[this.Day].Item1;
                                              this.reDNFIWB = Number(this.DNFIWB).toFixed(2);

                                              this.networkService.getDNFDie().subscribe((data) => {
                                                this.DNFDie = data.result[this.Day].Item1;
                                                this.reDNFDie = Number(this.DNFDie).toFixed(2);

                                                this.networkService.getDNFGas().subscribe((data ) => {
                                                  this.DNFGas = data.result[this.Day].Item1;
                                                  this.reDNFGas = Number(this.DNFGas).toFixed(2);

                                                  this.networkService.getDNFOWB().subscribe((data) => {
                                                    this.DNFOWB = data.result[this.Day].Item1;
                                                    this.reDNFOWB = Number(this.DNFOWB).toFixed(2);

                                                    this.networkService.getDNQSO().subscribe((data) => {
                                                      this.DNQSO = data.result[this.Day].Item1;
                                                      this.reDNQSO = Number(this.DNQSO).toFixed(2);

                                                      this.networkService.getDNQIWB().subscribe((data) => {
                                                        this.DNQIWB = data.result[this.Day].Item1;
                                                        this.reDNQIWB = Number(this.DNQIWB).toFixed(2);

                                                        this.networkService.getDNQDie().subscribe((data) => {
                                                          this.DNQDie = data.result[this.Day].Item1;
                                                          this.reDNQDie = Number(this.DNQDie).toFixed(2);

                                                          this.networkService.getDNQGas().subscribe((data ) => {
                                                            this.DNQGas = data.result[this.Day].Item1;
                                                            this.reDNQGas = Number(this.DNQGas).toFixed(2);

                                                            this.networkService.getDNQOWB().subscribe((data) => {
                                                              this.DNQOWB = data.result[this.Day].Item1;
                                                              this.reDNQOWB = Number(this.DNQOWB).toFixed(2);

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
                                                                    data: [this.reDNTSO,this.reDNTIWB,this.reDNTDie,this.reDNTGas,this.reDNTOWB],
                                                                    label: 'WIP',
                                                                    backgroundColor: 'rgba(223, 255, 0, 1)',
                                                                    // borderColor: "rgba(219, 0, 0, 1)"
                                                                  },
                                                                  {
                                                                    data: [this.reDNQSO,this.reDNQIWB,this.reDNQDie,this.reDNQGas,this.reDNQOWB],
                                                                    label: 'Queue',
                                                                    backgroundColor: 'rgba(255, 191, 0, 1)',
                                                                    // borderColor: "rgba(219, 0, 0, 1)"
                                                                  },
                                                                  {
                                                                    data: [this.reDNBSO,this.reDNBIWB,this.reDNBDie,this.reDNBGas,this.reDNBOWB],
                                                                    label: 'Busy',
                                                                    backgroundColor: 'rgba(255, 127, 80, 1)',
                                                                    // borderColor: "rgba(219, 0, 0, 1)"
                                                                  },
                                                                  {
                                                                    data: [ this.reDAWSO, this.reDAWIWB,this.reDAWDie,this.reDAWGas,this.reDAWOWB,],
                                                                    label: 'Waiting',
                                                                    backgroundColor: 'rgba(100, 149, 237, 1)',
                                                                    // borderColor: "rgba(219, 0, 0, 1)"
                                                                  },
                                                                  {
                                                                    data: [this.reDNFSO,this.reDNFIWB,this.reDNFDie,this.reDNFGas,this.reDNFOWB],
                                                                    label: 'Fail',
                                                                    backgroundColor: 'rgba(159, 226, 191, 1)',
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
