import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Layout/header/header.component';
import { MenuComponent } from './Layout/menu/menu.component';
import { FooterComponent } from './Layout/footer/footer.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import {APP_BASE_HREF} from '@angular/common';
import { NetworkService } from './Service/network.service';
import { LogInComponent } from './components/log-in/log-in.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainComponent } from './components/main/main.component';
import { RouterModule } from "@angular/router";
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { FinancedashboardComponent } from './components/financedashboard/financedashboard.component';
import { ChartsModule } from 'ng2-charts';
import * as chart from 'chart.js';
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
import { OpmenuComponent } from './Layout/Opmenu/Opmenu.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    FooterComponent,
    DashboardComponent,
    LogInComponent,
    MainComponent,
    ManagerDashboardComponent,
    UsersComponent,
    FinancedashboardComponent,
    JournalizingComponent,
    LedgerComponent,
    CashComponent,
    InventoryComponent,
    IncomeComponent,
    ReconciliationComponent,
    StockcardComponent,
    OrderComponent,
    PaidsaleComponent,
    ReceivableComponent,
    PayableComponent,
    OpmenuComponent,
   

    
  ],


  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FormsModule, 
    ReactiveFormsModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    ChartsModule
   
   
  ],
  entryComponents: [
    MainComponent
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
