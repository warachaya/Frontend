import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'node_modules/rxjs/internal/Subject';
import { BehaviorSubject } from 'node_modules/rxjs/internal/BehaviorSubject';



// import { Subject }    from 'rxjs/Subject';
// import { UsersAll } from '../Models/user';
// import { UsersAll } from '../Models/user';

@Injectable({
providedIn: 'root'
})

export class NetworkService {

  // public userURL1 = `https://localhost:44318/api/auth/user`;
  // private userURL = `https://localhost:5001/weatherforecast`;

  public EmployeeURL = `https://localhost:44318/api/auth/employee`;
  public DriverURL = `https://localhost:44318/api/auth/driver`;
  public TruckURL = `https://localhost:44318/api/auth/truck`;
  public CustomerURL = `https://localhost:44318/api/auth/customer`;
  public BayURL = `https://localhost:44318/api/auth/baystation`;
  public TranURL = `https://localhost:44318/api/auth/transaction`;
  public Tran2URL = `https://localhost:44318/api/auth/transaction2`;
  public	DayAvg_Die	=		'https://localhost:44353/api/pi/DailyAverageDieselCycleTime';
  public	DayAvg_Gas	=		'https://localhost:44353/api/pi/DailyAverageGasohol95CycleTime';
  public	DayNo_TruckWIP_SO	=		'https://localhost:44353/api/pi/DailyNumberOfTrucksWIPatSaleOffice';
  public	DayNo_TruckWIP_IWB	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatInboundWeightBridge';
  public	DayNo_TruckWIP_Die	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatDieselBay';
  public	DayNo_TruckWIP_Gas	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatGasohol95Bay';
  public	DayNo_TruckWIP_OWB	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatOutboundWeightBridge';
  public	DayAvg_W8_SO	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtSaleOffice	';
  public	DayAvg_W8_IEB	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtInboundWeightBridge	';
  public	DayAvg_W8_Die	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtDeiselBay	';
  public	DayAvg_W8_Gas	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtGasohol95Bay	';
  public	DayAvg_W8_OWB	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtOutboundWeightBridge	';
  public	DayNo_Busy_SO	=		'https://localhost:44353/api/pi/DailyNumberOfBusyTimeAtSaleOffice	';
  public	DayNo_Busy_IWB	=		'https://localhost:44353/api/pi/DailyNumberOfBusyTimeAtInboundWeightBridge	';
  public	DayNo_Busy_Die	=		'https://localhost:44353/api/pi/DailyNumberOfBusyTimeAtDieselBay	';
  public	DayNo_Busy_Gas	=		'https://localhost:44353/api/pi/DailyNumberOfBusyTimeAtGasohol95Bay	';
  public	DayNo_Busy_OWB	=		'https://localhost:44353/api/pi/DailyNumberOfBusyTimeAtOutboundWeightBridge	';
  public	DayNo_Fail_SO	=		'https://localhost:44353/api/pi/DailyTotalNumberOfFailedTimeAtSaleOffice	';
  public	DayNo_Fail_IWB	=		'https://localhost:44353/api/pi/DailyTotalNumberOfFailedTimeAtInboundWeightBridge	';
  public	DayNo_Fail_Die	=		'https://localhost:44353/api/pi/DailyTotalNumberOfFailedTimeAtDieselBay	';
  public	DayNo_Fail_Gas	=		'https://localhost:44353/api/pi/DailyTotalNumberOfFailedTimeAtGasohol95Bay	';
  public	DayNo_Fail_OWB	=		'https://localhost:44353/api/pi/DailyTotalNumberOfFailedTimeAtOutboundWeightBridge	';
  public	WeekAvg_Die	=		'https://localhost:44353/api/pi/WeeklyAverageDieselCycleTime	';
  public	WeekAvg_Gas	=		'https://localhost:44353/api/pi/WeeklyAverageGasohol95CycleTime	';
  public	WeekNo_TruckWIP_SO	=		'https://localhost:44353/api/pi/WeeklyNumberOfTrucksWIPatSaleOffice	';
  public	WeekNo_TruckWIP_IWB	=		'https://localhost:44353/api/pi/WeeklyNumberOfTrucksWIPatInboundWeightBridge	';
  public	WeekNo_TruckWIP_Die	=		'https://localhost:44353/api/pi/WeeklyNumberOfTrucksWIPatDieselBay	';
  public	WeekNo_TruckWIP_Gas	=		'https://localhost:44353/api/pi/WeeklyNumberOfTrucksWIPatGasohol95Bay	';
  public	WeekNo_TruckWIP_OWB	=		'https://localhost:44353/api/pi/WeeklyNumberOfTrucksWIPatOutboundWeightBridge	';
  public	WeekSch_Util_SO	=		'https://localhost:44353/api/pi/WeeklyScheduledUtilizationOfSaleOffice	';
  public	WeekSch_Util_IWB	=		'https://localhost:44353/api/pi/WeeklyScheduledUtilizationOfInboundWeightBridge	';
  public	WeekSch_Util_Die	=		'https://localhost:44353/api/pi/WeeklyScheduledUtilizationOfDieselBay	';
  public	WeekSch_Util_Gas	=		'https://localhost:44353/api/pi/WeeklyScheduledUtilizationOfGasohol95Bay	';
  public	WeekSch_Util_OWB	=		'https://localhost:44353/api/pi/WeeklyScheduledUtilizationOfOutboundWeightBridge	';
  public	WeekAvg_W8_SO	=		'https://localhost:44353/api/pi/WeeklyAverageWaitingTimeAtSaleOffice	';
  public	WeekAvg_W8_IWB	=		'https://localhost:44353/api/pi/WeeklyAverageWaitingTimeAtInboundWeightBridge	';
  public	WeekAvg_W8_Die	=		'https://localhost:44353/api/pi/WeeklyAverageWaitingTimeAtDeiselBay	';
  public	WeekAvg_W8_Gas	=		'https://localhost:44353/api/pi/WeeklyAverageWaitingTimeAtGasohol95Bay	';
  public	WeekAvg_W8_OWB	=		'https://localhost:44353/api/pi/WeeklyAverageWaitingTimeAtOutboundWeightBridge	';
  public	WeekNo_Busy_SO	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtSaleOffice	`';
  public	WeekNo_Busy_IWB	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtInboundWeightBridge	';
  public	WeekNo_Busy_Die	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtDieselBay	';
  public	WeekNo_Busy_Gas	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtGasohol95Bay	';
  public	WeekNo_Busy_OWB	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtOutboundWeightBridge	';
  public	WeekNo_Fail_SO	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtSaleOffice	';
  public	WeekNo_Fail_IWB	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtInboundWeightBridge	';
  public	WeekNo_Fail_Die	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtDieselBay	';
  public	WeekNo_Fail_Gas	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtGasohol95Bay	';
  public	WeekNo_Fail_OWB	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtOutboundWeightBridge	';
  public	MonthAvg_Die	=		'https://localhost:44353/api/pi/MonthlyAverageDieselCycleTime	';
  public	MonthAvg_Gas	=		'https://localhost:44353/api/pi/MonthlyAverageGasohol95CycleTime	';
  public	MonthNo_TruckWIP_SO	=		'https://localhost:44353/api/pi/MonthlyNumberOfTrucksWIPatSaleOffice	';
  public	MonthNo_TruckWIP_IWB	=		'https://localhost:44353/api/pi/MonthlyNumberOfTrucksWIPatInboundWeightBridge	';
  public	MonthNo_TruckWIP_Die	=		'https://localhost:44353/api/pi/MonthlyNumberOfTrucksWIPatDieselBay	';
  public	MonthNo_TruckWIP_Gas	=		'https://localhost:44353/api/pi/MonthlyNumberOfTrucksWIPatGasohol95Bay	';
  public	MonthNo_TruckWIP_OWB	=		'https://localhost:44353/api/pi/MonthlyNumberOfTrucksWIPatOutboundWeightBridge	';
  public	MonthSch_Util_SO	=		'https://localhost:44353/api/pi/MonthlyScheduledUtilizationOfSaleOffice	';
  public	MonthSch_Util_IWB	=		'https://localhost:44353/api/pi/MonthlyScheduledUtilizationOfInboundWeightBridge	';
  public	MonthSch_Util_Die	=		'https://localhost:44353/api/pi/MonthlyScheduledUtilizationOfDieselBay	';
  public	MonthSch_Util_Gas	=		'https://localhost:44353/api/pi/MonthlyScheduledUtilizationOfGasohol95Bay	';
  public	MonthSch_Util_OWB	=		'https://localhost:44353/api/pi/MonthlyScheduledUtilizationOfOutboundWeightBridge	';
  public	MonthAvg_W8_SO	=		'https://localhost:44353/api/pi/MonthlyAverageWaitingTimeAtSaleOffice	';
  public	MonthAvg_W8_IWB	=		'https://localhost:44353/api/pi/MonthlyAverageWaitingTimeAtInboundWeightBridge	';
  public	MonthAvg_W8_Die	=		'https://localhost:44353/api/pi/MonthlyAverageWaitingTimeAtDeiselBay	';
  public	MonthAvg_W8_Gas	=		'https://localhost:44353/api/pi/MonthlyAverageWaitingTimeAtGasohol95Bay	';
  public	MonthAvg_W8_OWB	=		'https://localhost:44353/api/pi/MonthlyAverageWaitingTimeAtOutboundWeightBridge	';
  public	MonthNo_Busy_SO	=		'https://localhost:44353/api/pi/MonthlyNumberOfBusyTimeAtSaleOffice	';
  public	MonthNo_Busy_IWB	=		'https://localhost:44353/api/pi/MonthlyNumberOfBusyTimeAtInboundWeightBridge	';
  public	MonthNo_Busy_Die	=		'https://localhost:44353/api/pi/MonthlyNumberOfBusyTimeAtDieselBay	';
  public	MonthNo_Busy_Gas	=		'https://localhost:44353/api/pi/MonthlyNumberOfBusyTimeAtGasohol95Bay	';
  public	MonthNo_Busy_OWB	=		'https://localhost:44353/api/pi/MonthlyNumberOfBusyTimeAtOutboundWeightBridge	';
  public	MonthNo_Fail_SO	=		'https://localhost:44353/api/pi/MonthlyTotalNumberOfFailedTimeAtSaleOffice	';
  public	MonthNo_Fail_IWB	=		'https://localhost:44353/api/pi/MonthlyTotalNumberOfFailedTimeAtInboundWeightBridge	';
  public	MonthNo_Fail_Die	=		'https://localhost:44353/api/pi/MonthlyTotalNumberOfFailedTimeAtDieselBay	';
  public	MonthNo_Fail_Gas	=		'https://localhost:44353/api/pi/MonthlyTotalNumberOfFailedTimeAtGasohol95Bay	';
  public	MonthNo_Fail_OWB	=		'https://localhost:44353/api/pi/MonthlyTotalNumberOfFailedTimeAtOutboundWeightBridge	';



  
  
  

  


  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<any> { 
    return this.httpClient.get<any>(this.CustomerURL);    
  }

  getEmployee(): Observable<any> { // non-fix type case 
    return this.httpClient.get<any>(this.EmployeeURL);    
  }
  getTransac(): Observable<any> { // non-fix type case 
    return this.httpClient.get<any>(this.TranURL);    
  }
  
}
