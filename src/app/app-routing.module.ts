import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';
import { UsersComponent } from './components/users/users.component';
import { FinancedashboardComponent } from './components/financedashboard/financedashboard.component';

import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
// import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';


//routes called by app.componnent.html
const routes: Routes = [

  // localhost/ (เว้นว่าง)  redirect to localhost/login
  { path: '',  pathMatch: 'full', redirectTo: 'login' },
  // localhost/opmain redirect to main/dashboard
  { path: 'opmain', pathMatch: 'full', redirectTo: 'main/dashboard' },
  { path: 'manmain', pathMatch: 'full', redirectTo: 'main/mandashboard' },
  { path: 'finmain', pathMatch: 'full', redirectTo: 'main/financedashboard' },
  
  // localhost/login show component Login
  { path: 'login', component: LogInComponent },
  { path: 'users', component: UsersComponent },
  { path: 'financedashboard', component: FinancedashboardComponent },


  // localhost/main show component main and call children route
  {path: 'main', component: MainComponent,
   //children called by main.componnent.html
    children: [
      // localhost/main/dashboard show component dashboard 
      { path: 'dashboard', component:  DashboardComponent},
      { path: 'mandashboard', component:  ManagerDashboardComponent},
      
 
  ]},


];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes)],

 
  exports: [RouterModule]
})

export class AppRoutingModule { }
