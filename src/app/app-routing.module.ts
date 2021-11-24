import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { DrslistComponent } from './drslist/drslist.component';
import { GeneralComponent } from './general/general.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { OrthopedicComponent } from './orthopedic/orthopedic.component';
import { PediatricianComponent } from './pediatrician/pediatrician.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
  {
    path: '', component:HomeComponent
  },
  {
    path:'appointment-list', component:AppointmentListComponent,
  },
  {
    path:'home', component:HomeComponent
  },
  {
    path:'drslist', component:DrslistComponent ,
    children:[
      {
        path:'general' , component:GeneralComponent
      },
      {
        path:'', component:GeneralComponent
      },
      {
        path:'orthopedic', component:OrthopedicComponent
      },
      {
        path:'pediatrician', component:PediatricianComponent
      }
     
    ]
  },
  {
    path:'appointment', component:AppointmentComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'register', component:RegisterComponent
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
