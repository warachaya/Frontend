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

// new code
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastrModule } from 'ngx-toastr';
import { ComponentsModule } from './components/components.module';
// import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';



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
    FormsModule, 
    ReactiveFormsModule,
    ChartsModule,


    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    NgbModule,
    ToastrModule.forRoot()
   
   
  ],
  entryComponents: [
    MainComponent
  ],
  providers: [NetworkService],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA],
  
})
export class AppModule { }
