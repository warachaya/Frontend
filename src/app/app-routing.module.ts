import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManagerDashboardComponent } from './components/manager-dashboard/manager-dashboard.component';



//routes called by app.componnent.html
const routes: Routes = [

  // localhost/ (เว้นว่าง)  redirect to localhost/login
  { path: '',  pathMatch: 'full', redirectTo: 'login' },
  // localhost/opmain redirect to main/dashboard
  { path: 'opmain', pathMatch: 'full', redirectTo: 'main/dashboard' },
  { path: 'manmain', pathMatch: 'full', redirectTo: 'main/mandashboard' },
  
  // localhost/login show component Login
  { path: 'login', component: LogInComponent },

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
  imports: [RouterModule.forRoot(routes)],

 
  exports: [RouterModule]
})

export class AppRoutingModule { }
