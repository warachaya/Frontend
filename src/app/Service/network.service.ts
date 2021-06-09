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
  public TranURL = `https://localhost:44318/api/auth/transaction`;
  public Tran2URL = `https://localhost:44318/api/auth/transaction2`;

  public SE_DBURL = `https://localhost:44318/api/auth/SE_DB`;
  public SE_GasURL = `https://localhost:44318/api/auth/SE_Gas`;
  public SE_IWBURL = `https://localhost:44318/api/auth/SE_IWB`;
  public SE_OWBURL = `https://localhost:44318/api/auth/SE_OWB`;
  public SE_SOURL = `https://localhost:44318/api/auth/SE_SO`;


  public MonthlyIncomeStatementURL = `https://localhost:44318/api/auth/MonthlyIncomeStatement`;
  public TotalCalculateURL = `https://localhost:44318/api/auth/TotalCalculate`;
  public JournalizeURL = `https://localhost:44318/api/auth/Journalize`;
  public ReconciliationURL = `https://localhost:44318/api/auth/Reconciliation`;
  public PurchaseURL = `https://localhost:44318/api/auth/Purchase`;
  public InventoryURL = `https://localhost:44318/api/auth/Inventory`;
  public InvoiceURL = `https://localhost:44318/api/auth/Invoice`;
  public CashURL = `https://localhost:44318/api/auth/Cash`;
  public AccountRecieveableURL = `https://localhost:44318/api/auth/AccountRecieveable`;
  public AccountpayableURL = `https://localhost:44318/api/auth/Accountpayable`;
  public Gasohol95URL = `https://localhost:44318/api/auth/Gasohol95`;
  public DieselURL = `https://localhost:44318/api/auth/Diesel`;


  public	DayAvg_Die	=		'https://localhost:44353/api/pi/DailyAverageDieselCycleTime';
  public	DayAvg_Gas	=		'https://localhost:44353/api/pi/DailyAverageGasohol95CycleTime';
  public	DayNo_TruckWIP_SO	=		'https://localhost:44353/api/pi/DailyNumberOfTrucksWIPatSaleOffice';
  public	DayNo_TruckWIP_IWB	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatInboundWeightBridge';
  public	DayNo_TruckWIP_Die	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatDieselBay';
  public	DayNo_TruckWIP_Gas	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatGasohol95Bay';
  public	DayNo_TruckWIP_OWB	=		'https://localhost:44353/api/pi/DailyNumberofTrucksWIPatOutboundWeightBridge';
  public	DayAvg_W8_SO	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtSaleOffice	';
  public	DayAvg_W8_IWB	=		'https://localhost:44353/api/pi/DailyAverageWaitingTimeAtInboundWeightBridge	';
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
  public	DayNo_Q_SO	=		'https://localhost:44353/api/pi/DailyAverageNumberofQueueAtSaleoffice	';
  public	DayNo_Q_IWB	=		'https://localhost:44353/api/pi/DailyAverageNumberofQueueAtInboundWeightBridge	';
  public	DayNo_Q_Die	=		'https://localhost:44353/api/pi/DailyAverageNumberofQueueAtDieselBay	';
  public	DayNo_Q_Gas	=		'https://localhost:44353/api/pi/DailyAverageNumberofQueueAtGasohol95Bay	';
  public	DayNo_Q_OWB	=		'https://localhost:44353/api/pi/DailyAverageNumberofQueueAtOutboundWeightBridge	';
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
  public	WeekNo_Busy_SO	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtSaleOffice';
  public	WeekNo_Busy_IWB	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtInboundWeightBridge';
  public	WeekNo_Busy_Die	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtDieselBay';
  public	WeekNo_Busy_Gas	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtGasohol95Bay';
  public	WeekNo_Busy_OWB	=		'https://localhost:44353/api/pi/WeeklyNumberOfBusyTimeAtOutboundWeightBridge	';
  public	WeekNo_Fail_SO	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtSaleOffice	';
  public	WeekNo_Fail_IWB	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtInboundWeightBridge	';
  public	WeekNo_Fail_Die	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtDieselBay	';
  public	WeekNo_Fail_Gas	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtGasohol95Bay	';
  public	WeekNo_Fail_OWB	=		'https://localhost:44353/api/pi/WeeklyTotalNumberOfFailedTimeAtOutboundWeightBridge	';
  public	WeekNo_Q_SO	=		'https://localhost:44353/api/pi/WeeklyAverageNumberofQueueAtSaleoffice	';
  public	WeekNo_Q_IWB	=		'https://localhost:44353/api/pi/WeeklyAverageNumberofQueueAtInboundWeightBridge	';
  public	WeekNo_Q_Die	=		'https://localhost:44353/api/pi/WeeklyAverageNumberofQueueAtDieselBay	';
  public	WeekNo_Q_Gas	=		'https://localhost:44353/api/pi/WeeklyAverageNumberofQueueAtGasohol95Bay	';
  public	WeekNo_Q_OWB	=		'https://localhost:44353/api/pi/WeeklyAverageNumberofQueueAtOutboundWeightBridge	';
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
  public	MonthNo_Q_SO	=		'https://localhost:44353/api/pi/MonthlyAverageNumberofQueueAtSaleoffice	';
  public	MonthNo_Q_IWB	=		'https://localhost:44353/api/pi/MonthlyAverageNumberofQueueAtInboundWeightBridge	';
  public	MonthNo_Q_Die	=		'https://localhost:44353/api/pi/MonthlyAverageNumberofQueueAtDieselBay	';
  public	MonthNo_Q_Gas	=		'https://localhost:44353/api/pi/MonthlyAverageNumberofQueueAtGasohol95Bay	';
  public	MonthNo_Q_OWB	=		'https://localhost:44353/api/pi/MonthlyAverageNumberofQueueAtOutboundWeightBridge	';










  constructor(private httpClient: HttpClient) { }

  getIncomeStatement(): Observable<any> {
    return this.httpClient.get<any>(this.MonthlyIncomeStatementURL);
  }
  getTotalCalculate(): Observable<any> {
    return this.httpClient.get<any>(this.TotalCalculateURL);
  }
  getTotalJournalize(): Observable<any> {
    return this.httpClient.get<any>(this.JournalizeURL);
  }
  getReconciliation(): Observable<any> {
    return this.httpClient.get<any>(this.ReconciliationURL);
  }
  getPurchase(): Observable<any> {
    return this.httpClient.get<any>(this.PurchaseURL);
  }
  getInventory(): Observable<any> {
    return this.httpClient.get<any>(this.InventoryURL);
  }
  getInvoice(): Observable<any> {
    return this.httpClient.get<any>(this.InvoiceURL);
  }
  getCash(): Observable<any> {
    return this.httpClient.get<any>(this.CashURL);
  }
  getAccountRecieveable(): Observable<any> {
    return this.httpClient.get<any>(this.AccountRecieveableURL);
  }
  getAccountpayable(): Observable<any> {
    return this.httpClient.get<any>(this.AccountpayableURL);
  }
  getGasohol95(): Observable<any> {
    return this.httpClient.get<any>(this.Gasohol95URL);
  }
  getDiesel(): Observable<any> {
    return this.httpClient.get<any>(this.DieselURL);
  }


  getSEDB(): Observable<any> {
    return this.httpClient.get<any>(this.SE_DBURL);
  }
  getSEGas(): Observable<any> {
    return this.httpClient.get<any>(this.SE_GasURL);
  }
  getSEIWB(): Observable<any> {
    return this.httpClient.get<any>(this.SE_IWBURL);
  }
  getSEOWB(): Observable<any> {
    return this.httpClient.get<any>(this.SE_OWBURL);
  }
  getSESO(): Observable<any> {
    return this.httpClient.get<any>(this.SE_SOURL);
  }


  getEmployee(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.EmployeeURL);
  }
  getTransac(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.TranURL);
  }
  getTransac2(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.Tran2URL);
  }

  getDAD(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_Die);
  }
  getDAG(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_Gas);
  }
  getDNTSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_TruckWIP_SO);
  }
  getDNTIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_TruckWIP_IWB);
  }
  getDNTDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_TruckWIP_Die);
  }
  getDNTGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_TruckWIP_Gas);
  }
  getDNTOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_TruckWIP_OWB);
  }
  getDAWSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_W8_SO);
  }
  getDAWIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_W8_IWB);
  }
  getDAWDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_W8_Die);
  }
  getDAWGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_W8_Gas);
  }
  getDAWOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayAvg_W8_OWB);
  }
  getDNBSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Busy_SO);
  }
  getDNBIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Busy_IWB);
  }
  getDNBDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Busy_Die);
  }
  getDNBGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Busy_Gas);
  }
  getDNBOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Busy_OWB);
  }
  getDNFSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Fail_SO);
  }
  getDNFIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Fail_IWB);
  }
  getDNFDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Fail_Die);
  }
  getDNFGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Fail_Gas);
  }
  getDNFOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Fail_OWB);
  }
  getDNQSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Q_SO);
  }
  getDNQIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Q_IWB);
  }
  getDNQDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Q_Die);
  }
  getDNQGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Q_Gas);
  }
  getDNQOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.DayNo_Q_OWB);
  }

  getWAD(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_Die);
  }
  getWAG(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_Gas);
  }
  getWNTSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_TruckWIP_SO);
  }
  getWNTIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_TruckWIP_IWB);
  }
  getWNTDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_TruckWIP_Die);
  }
  getWNTGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_TruckWIP_Gas);
  }
  getWNTOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_TruckWIP_OWB);
  }
  getWAWSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_W8_SO);
  }
  getWAWIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_W8_IWB);
  }
  getWAWDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_W8_Die);
  }
  getWAWGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_W8_Gas);
  }
  getWAWOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekAvg_W8_OWB);
  }
  getWNBSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Busy_SO);
  }
  getWNBIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Busy_IWB);
  }
  getWNBDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Busy_Die);
  }
  getWNBGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Busy_Gas);
  }
  getWNBOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Busy_OWB);
  }
  getWNFSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Fail_SO);
  }
  getWNFIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Fail_IWB);
  }
  getWNFDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Fail_Die);
  }
  getWNFGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Fail_Gas);
  }
  getWNFOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Fail_OWB);
  }
  getWNQSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Q_SO);
  }
  getWNQIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Q_IWB);
  }
  getWNQDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Q_Die);
  }
  getWNQGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Q_Gas);
  }
  getWNQOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekNo_Q_OWB);
  }
  getWSUSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekSch_Util_SO);
  }
  getWSUIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekSch_Util_IWB);
  }
  getWSUDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekSch_Util_Die);
  }
  getWSUGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekSch_Util_Gas);
  }
  getWSUOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.WeekSch_Util_OWB);
  }


  getMAD(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_Die);
  }
  getMAG(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_Gas);
  }
  getMNTSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_TruckWIP_SO);
  }
  getMNTIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_TruckWIP_IWB);
  }
  getMNTDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_TruckWIP_Die);
  }
  getMNTGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_TruckWIP_Gas);
  }
  getMNTOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_TruckWIP_OWB);
  }
  getMAWSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_W8_SO);
  }
  getMAWIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_W8_IWB);
  }
  getMAWDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_W8_Die);
  }
  getMAWGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_W8_Gas);
  }
  getMAWOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthAvg_W8_OWB);
  }
  getMNBSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Busy_SO);
  }
  getMNBIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Busy_IWB);
  }
  getMNBDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Busy_Die);
  }
  getMNBGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Busy_Gas);
  }
  getMNBOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Busy_OWB);
  }
  getMNFSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Fail_SO);
  }
  getMNFIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Fail_IWB);
  }
  getMNFDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Fail_Die);
  }
  getMNFGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Fail_Gas);
  }
  getMNFOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Fail_OWB);
  }
  getMNQSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Q_SO);
  }
  getMNQIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Q_IWB);
  }
  getMNQDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Q_Die);
  }
  getMNQGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Q_Gas);
  }
  getMNQOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthNo_Q_OWB);
  }
  getMSUSO(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthSch_Util_SO);
  }
  getMSUIWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthSch_Util_IWB);
  }
  getMSUDie(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthSch_Util_Die);
  }
  getMSUGas(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthSch_Util_Gas);
  }
  getMSUOWB(): Observable<any> { // non-fix type case
    return this.httpClient.get<any>(this.MonthSch_Util_OWB);
  }





}



