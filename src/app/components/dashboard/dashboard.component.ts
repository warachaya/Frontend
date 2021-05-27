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

import { FormGroup, FormControl, Validators} from '@angular/forms';

// import {
//   SharedService
// } from 'src/app/Service/Shared.service';

// import { User_ } from 'src/app/Models/user';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  DashData : Daily_[]|undefined;
  TruckIn : number | undefined;
  TruckOut : number | undefined;
  FillDiesel : number | undefined;
  FillGas : number | undefined;
  CompDate : string | undefined;
  
  

  // loginID: string | undefined;
  // msg : string | any;


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

  
  
  
  constructor(private networkService: NetworkService) {
    // this.SharedService.stream$.subscribe(this.receiveMessage.bind(this))
  }
  
  ngOnInit(): void {
        
    this.changeData();
    
  }

  
  
  //   receiveMessage(msg : string) {
  //     console.log(msg); // your message from component A
  //     this.loginID = msg;
  //     console.log(this.loginID);
  //  }


  barChartOptions: ChartOptions = {
    responsive: true,
  }

  ;
  barChartLabels: Label[] = ['SaleOffice',
    'Inbound WB',
    'Diesel Bay',
    'Gasohol Bay',
    'Outbound WB'
  ];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];

  barChartData: ChartDataSets[] = [{
      data: [45, 37, 60, 70, 46, 33],
      label: 'Best Fruits',
      backgroundColor: "rgba(219, 0, 0, 1)",
      // borderColor: "rgba(219, 0, 0, 1)"
    }

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
  
   
  form = new FormGroup({
    website: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
  }
  changeWebsite(e : any) {
    // console.log(e.target.value);
    this.CompDate = e.target.value;
    // console.log(this.CompDate);
  };

  changeData(){

    this.networkService.getTransac().subscribe(

      data => {
        this.DashData = data.result;
        console.log(this.DashData);
        this.TruckIn  = data.result[1].C_Truck_In
        this.TruckOut = data.result[1].Truck_Out
        this.FillDiesel = data.result[1].Amount_of_Fuel_diesel_
        this.FillGas = data.result[1].Amount_of_Fuel_gasohol95_

        for (let i = 1; i <= 32 ; i++)
        {
          
          if(this.CompDate == this.Date[i-1].viewValue)
          {
            console.log(this.CompDate);
            console.log(this.Date[i-1].viewValue);
            this.TruckIn  = data.result[i-1].C_Truck_In
            console.log(this.TruckIn);
            this.TruckOut = data.result[i-1].Truck_Out
            console.log(this.TruckOut);
            this.FillDiesel = data.result[i-1].Amount_of_Fuel_diesel_
            console.log(this.FillDiesel);
            this.FillGas = data.result[i-1].Amount_of_Fuel_gasohol95_
            console.log(this.FillGas);
            
          }
          
        }
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
