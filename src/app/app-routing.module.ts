import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';


const routes: Routes = [
  //{ path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LogInComponent },
  {path: '**', component: LogInComponent},
  {path: '', component: MainComponent}, 
    // redirectTo: 'dashboard', pathMatch: 'full',
    // children: [
      //{ path: 'dashboard', component:  DashboardComponent},
      // { path: 'alerts', component: AlertsComponent },
      // { path: 'dashboard', component: EriskDashboardComponent }
  // ]},
  { path: 'dashboard', component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
