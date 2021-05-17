import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './components/dashboard/dashboard.component'
'./components/dashboard/dashboard.component';
const routes: Routes = [
{path: '**', component: DashboardComponent},
{
  path : "", redirectTo: "/dashboard", pathMatch: "full"

},{
  path : "dashboard",
  component: DashboardComponent
}
];
@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }

// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// import { LoginComponent } from './components/login/login.component'
// './components/login/login.component';
// const routes: Routes = [
// {path: '**', component: LoginComponent},
// {
//   path : "", redirectTo: "/login", pathMatch: "full"

// },{
//   path : "login",
//   component: LoginComponent
// }
// ];
// @NgModule({
// imports: [RouterModule.forRoot(routes)],
// exports: [RouterModule]
// })
// export class AppRoutingModule { }