import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainComponent } from './components/main/main.component';
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


//routes called by app.componnent.html
const routes: Routes = [

  // localhost/ (เว้นว่าง)  redirect to localhost/login
  { path: '',  pathMatch: 'full', redirectTo: 'login' },
  // localhost/opmain redirect to main/dashboard
  // { path: 'opmain', pathMatch: 'full', redirectTo: 'main/dashboard' },
  // { path: 'manmain', pathMatch: 'full', redirectTo: 'main/mandashboard' },
  
  
  
  // localhost/login show component Login
  { path: 'dashboard', component:  DashboardComponent },
  { path: 'mandashboard', component: ManagerDashboardComponent },
  { path: 'login', component: LogInComponent },
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







  // localhost/main show component main and call children route
  {path: 'main', component: MainComponent,
   //children called by main.componnent.html
    children: [
      // localhost/main/dashboard show component dashboard 
      // { path: 'dashboard', component:  DashboardComponent},
      // { path: 'mandashboard', component:  ManagerDashboardComponent},
      
 
  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

 
  exports: [RouterModule]
})

export class AppRoutingModule { }
