import {
  Component,
  OnInit
} from '@angular/core';

import {
  NetworkService
} from 'src/app/Service/network.service';

import {
  ChartOptions,
  ChartType,
  ChartDataSets
} from 'chart.js';

import {
  Label
} from 'ng2-charts';

import {
  Daily_
} from 'src/app/Models/FillingDailyandmonthData';

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
} from 'src/app/Models/OpDaily';

import {
  FormGroup,
  FormControl,
  Validators
} from '@angular/forms';



const loginID = localStorage.getItem('ID');



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
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





  ID: string | any;
  // msg: string | any;


  Date: Date[] = [{
      value: '1',
      viewValue: '1 March'
    }

    ,
    {
      value: '2',
      viewValue: '2 March'
    }

    ,
    {
      value: '3',
      viewValue: '3 March'
    }

    ,
    {
      value: '4',
      viewValue: '4 March'
    }

    ,
    {
      value: '5',
      viewValue: '5 March'
    }

    ,
    {
      value: '6',
      viewValue: '6 March'
    }

    ,
    {
      value: '7',
      viewValue: '7 March'
    }

    ,
    {
      value: '8',
      viewValue: '8 March'
    }

    ,
    {
      value: '9',
      viewValue: '9 March'
    }

    ,
    {
      value: '10',
      viewValue: '10 March'
    }

    ,
    {
      value: '11',
      viewValue: '11 March'
    }

    ,
    {
      value: '12',
      viewValue: '12 March'
    }

    ,
    {
      value: '13',
      viewValue: '13 March'
    }

    ,
    {
      value: '14',
      viewValue: '14 March'
    }

    ,
    {
      value: '15',
      viewValue: '15 March'
    }

    ,
    {
      value: '16',
      viewValue: '16 March'
    }

    ,
    {
      value: '17',
      viewValue: '17 March'
    }

    ,
    {
      value: '18',
      viewValue: '18 March'
    }

    ,
    {
      value: '19',
      viewValue: '19 March'
    }

    ,
    {
      value: '20',
      viewValue: '20 March'
    }

    ,
    {
      value: '21',
      viewValue: '21 March'
    }

    ,
    {
      value: '22',
      viewValue: '22 March'
    }

    ,
    {
      value: '23',
      viewValue: '23 March'
    }

    ,
    {
      value: '24',
      viewValue: '24 March'
    }

    ,
    {
      value: '25',
      viewValue: '25 March'
    }

    ,
    {
      value: '26',
      viewValue: '26 March'
    }

    ,
    {
      value: '27',
      viewValue: '27 March'
    }

    ,
    {
      value: '28',
      viewValue: '28 March'
    }

    ,
    {
      value: '29',
      viewValue: '29 March'
    }

    ,
    {
      value: '30',
      viewValue: '30 March'
    }

    ,
    {
      value: '31',
      viewValue: '31 March'
    }

    ,
    {
      value: '32',
      viewValue: '1 April'
    }
  ];




  constructor(private networkService: NetworkService ) {
    
  }

  ngOnInit(): void {

    
    this.changeData();
    this.ID = loginID;
    
  }



  barChartOptions: ChartOptions = {
    responsive: true,
  }

  ;
  barChartLabels: Label[] = [
    'SaleOffice',
    'Inbound WB',
    'Diesel Bay',
    'Gasohol Bay',
    'Outbound WB'
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [
    {
      data: [45, 37, 60, 70, 46, 33],
            label: 'Queue',
      backgroundColor: "rgba(219, 0, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    },
    {
      data: [12, 19, 14, 56, 14, 41],
            label: 'WIP',
      backgroundColor: "rgba(100, 250, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    },

  ];

  barChartOptions1: ChartOptions = {
    responsive: true,
  }

  ;
  barChartLabels1: Label[] = ['SaleOffice',
    'Inbound WB',
    'Diesel Bay',
    'Gasohol Bay',
    'Outbound WB'
  ];
  barChartType1: ChartType = 'bar';
  barChartLegend1 = true;
  barChartPlugins1 = [];

  barChartData1: ChartDataSets[] = [{
      data: [45, 37, 60, 10, 46, 33],
      label: 'Best Fruits',
      backgroundColor: "rgba(100, 0, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }

  ];

  barChartOptions2: ChartOptions = {
    responsive: true,
  }

  ;
  barChartLabels2: Label[] = ['SaleOffice',
    'Inbound WB',
    'Diesel Bay',
    'Gasohol Bay',
    'Outbound WB'
  ];
  barChartType2: ChartType = 'bar';
  barChartLegend2 = true;
  barChartPlugins2 = [];

  barChartData2: ChartDataSets[] = [{
      data: [45, 37, 60, 10, 46, 33],
      label: 'Best Fruits',
      backgroundColor: "rgba(100, 0, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }

  ];
  barChartOptions3: ChartOptions = {
    responsive: true,
  }

  ;
  barChartLabels3: Label[] = ['SaleOffice',
    'Inbound WB',
    'Diesel Bay',
    'Gasohol Bay',
    'Outbound WB'
  ];
  barChartType3: ChartType = 'bar';
  barChartLegend3 = true;
  barChartPlugins3 = [];

  barChartData3: ChartDataSets[] = [{
      data: [45, 37, 60, 10, 46, 33],
      label: 'Best Fruits',
      backgroundColor: "rgba(100, 0, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }

  ];


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
    // console.log(e.target.value);
    this.CompDate = e.target.value;
    // console.log(this.CompDate);
  };

  changeData() {

    this.networkService.getTransac().subscribe(

      data => {
        this.DashData = data.result;


        console.log(this.DashData);
        this.TruckIn = data.result[1].C_Truck_In
        this.TruckOut = data.result[1].Truck_Out
        this.FillDiesel = data.result[1].Amount_of_Fuel_diesel_
        this.FillGas = data.result[1].Amount_of_Fuel_gasohol95_


        for (let i = 1; i <= 32; i++) {

          if (this.CompDate == this.Date[i - 1].viewValue) {
            // console.log(this.CompDate);
            // console.log(this.Date[i - 1].viewValue);
            this.TruckIn = data.result[i - 1].C_Truck_In
            // console.log(this.TruckIn);
            this.TruckOut = data.result[i - 1].Truck_Out
            // console.log(this.TruckOut);
            this.FillDiesel = data.result[i - 1].Amount_of_Fuel_diesel_
            // console.log(this.FillDiesel);
            this.FillGas = data.result[i - 1].Amount_of_Fuel_gasohol95_
            // console.log(this.FillGas);

            
          }
          
        }
      },
      error => {
        alert("Can't not get users data");
      }
      
      );    

      this.networkService.getDAD().subscribe(
        data => {
          this.DAD = data.result;
          console.log(data.result[10].Item1);
          
          
        },
        error => {
          alert("Can't not get users data");
        }
        );
    this.networkService.getDAG().subscribe(
      data2 => {
        this.DAG = data2.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
    this.networkService.getDNTSO().subscribe(
      data3 => {
        this.DNTSO = data3.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNTIWB().subscribe(
      data4 => {
        this.DNTIWB = data4.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNTDie().subscribe(
      data5 => {
        this.DNTDie = data5.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNTGas().subscribe(
      data6 => {
        this.DNTGas = data6.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNTOWB().subscribe(
      data7 => {
        this.DNTOWB = data7.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDAWSO().subscribe(
      data8 => {
        this.DAWSO = data8.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDAWIWB().subscribe(
      data9 => {
        this.DAWIWB = data9.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDAWDie().subscribe(
      data10 => {
        this.DAWDie = data10.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDAWGas().subscribe(
      data11 => {
        this.DAWGas = data11.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDAWOWB().subscribe(
      data12 => {
        this.DAWOWB = data12.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNBSO().subscribe(
      data13 => {
        this.DNBSO = data13.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNBIWB().subscribe(
      data14 => {
        this.DNBIWB = data14.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNBDie().subscribe(
      data15 => {
        this.DNBDie = data15.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNBGas().subscribe(
      data16 => {
        this.DNBGas = data16.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNBOWB().subscribe(
      data17 => {
        this.DNBOWB = data17.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
    this.networkService.getDNFSO().subscribe(
      data18 => {
        this.DNFSO = data18.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
  
    );
    this.networkService.getDNFIWB().subscribe(
      data19 => {
        this.DNFIWB = data19.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNFDie().subscribe(
      data20 => {
        this.DNFDie = data20.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNFGas().subscribe(
      data21 => {
        this.DNFGas = data21.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );
  
    this.networkService.getDNFOWB().subscribe(
      data22 => {
        this.DNFOWB = data22.result;
  
      },
      error => {
        alert("Can't not get users data");
      }
    );

      
      
      
    }
    
  
}


interface Date {
  value: string;
  viewValue: string;
}
