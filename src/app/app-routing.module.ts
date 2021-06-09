import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainComponent } from './components/main/main.component';
import { OPmainComponent } from './components/OPmain/OPmain.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { FinancedashboardComponent } from './components/financedashboard/financedashboard.component';
import { JournalizingComponent } from './components/journalizing/journalizing.component';
import { LedgerComponent } from './components/ledger/ledger.component';
import { CashComponent } from './components/cash/cash.component';
import { InventoryComponent } from './components/inventory/inventory.component';
import { IncomeComponent } from './components/income/income.component';
import { ReconciliationComponent } from './components/reconciliation/reconciliation.component';
import { StockcardComponent } from './components/stockcard/stockcard.component';
import { OrderComponent } from './components/order/order.component';
import { PaidsaleComponent } from './components/paidsale/paidsale.component';
import { ReceivableComponent } from './components/receivable/receivable.component';
import { PayableComponent } from './components/payable/payable.component';
import { FinanceComponent } from './components/finance/finance.component';


//routes called by app.componnent.html
const routes: Routes = [

  // localhost/ (เว้นว่าง)  redirect to localhost/login
  { path: '',  component: LogInComponent },
 

  // localhost/opmain redirect to main/dashboard
  { path: 'op_main', pathMatch: 'full', redirectTo: 'OPmain/dashboard' },
  { path: 'op_users', pathMatch: 'full', redirectTo: 'OPmain/Users' },
  
  
  // localhost/Manmain redirect to manmain/mandashboard
  { path: 'man_opmain', pathMatch: 'full', redirectTo: 'main/dashboard' },
  { path: 'man_main', pathMatch: 'full', redirectTo: 'main/mandashboard' },
  { path: 'man_users', pathMatch: 'full', redirectTo: 'main/users' },
  { path: 'man_financedashboard', pathMatch: 'full', redirectTo: 'main/financedashboard' },
  { path: 'man_journalizing', pathMatch: 'full', redirectTo: 'main/journalizing' },
  { path: 'man_ledger', pathMatch: 'full', redirectTo: 'main/ledger' },
  { path: 'man_cash',pathMatch: 'full', redirectTo: 'main/cash' },
  { path: 'man_inventory',pathMatch: 'full', redirectTo: 'main/inventory' },
  { path: 'man_income', pathMatch: 'full', redirectTo: 'main/income' },
  { path: 'man_reconciliation', pathMatch: 'full', redirectTo: 'main/reconciliation' },
  { path: 'man_stockcard', pathMatch: 'full', redirectTo: 'main/stockcard' },
  { path: 'man_order', pathMatch: 'full', redirectTo: 'main/order' },
  { path: 'man_paidsale', pathMatch: 'full', redirectTo: 'mainpaidsale' },
  { path: 'man_receivable', pathMatch: 'full', redirectTo: 'main/receivable' },
  { path: 'man_payable', pathMatch: 'full', redirectTo: 'main/payable' },
  { path: 'man_finance', pathMatch: 'full', redirectTo: 'main/finance' },
  

  // localhost/login show component Login
  { path: 'login', component: LogInComponent },
  

  // localhost/(easy access)
  { path: 'mandashboard', component: ManagerDashboardComponent },
  { path: 'dashboard', component:  DashboardComponent },
  { path: 'users', component: UsersComponent },
  { path: 'financedashboard', component: FinancedashboardComponent },
  { path: 'journalizing', component:  JournalizingComponent },
  { path: 'ledger', component:   LedgerComponent },
  { path: 'cash', component:   CashComponent },
  { path: 'inventory', component:   InventoryComponent },
  { path: 'income', component:   IncomeComponent },
  { path: 'reconciliation', component:   ReconciliationComponent },
  { path: 'stockcard', component:  StockcardComponent },
  { path: 'order', component: OrderComponent },
  { path: 'paidsale', component: PaidsaleComponent },
  { path: 'receivable', component: ReceivableComponent },
  { path: 'payable', component: PayableComponent },
  { path: 'finance', component: FinanceComponent },







  // localhost/main show component main and call children route
  {path: 'OPmain', component: OPmainComponent,
   //children called by main.componnent.html
    children: [
      // localhost/main/dashboard show component dashboard 
      { path: 'dashboard', component:  DashboardComponent},
      { path: 'Users', component:  UsersComponent},
      // { path: 'mandashboard', component:  ManagerDashboardComponent},
      
      
    ]},
    
    {path: 'main', component: MainComponent,
    //children called by main.componnent.html
    children: [
      // localhost/main/dashboard show component dashboard 
      // { path: 'dashboard', component:  DashboardComponent},
      { path: 'dashboard',        component:   DashboardComponent},
      { path: 'mandashboard',     component:   ManagerDashboardComponent},
      { path: 'users',            component:   UsersComponent },
      { path: 'financedashboard', component:   FinancedashboardComponent },
      { path: 'journalizing',     component:   JournalizingComponent },
      { path: 'ledger',           component:   LedgerComponent },
      { path: 'cash',             component:   CashComponent },
      { path: 'inventory',        component:   InventoryComponent },
      { path: 'income',           component:   IncomeComponent },
      { path: 'reconciliation',   component:   ReconciliationComponent },
      { path: 'stockcard',        component:   StockcardComponent },
      { path: 'order',            component:   OrderComponent },
      { path: 'paidsale',         component:   PaidsaleComponent },
      { path: 'receivable',       component:   ReceivableComponent },
      { path: 'payable',          component:   PayableComponent },
      { path: 'finance',          component:   FinanceComponent },
      
 
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

 
  exports: [RouterModule]
})

export class AppRoutingModule { }
