import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import{MembersComponent}from './members/members.component';
import{AuthGuard}from './auth.service';
import {ProfileComponent}from './profile/profile.component';
const routes: Routes = [
  {
    path: '', 
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'members',
    component:MembersComponent,
    children:[],
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent,
    children:[]
  },{
    path : 'createProfile',
    component : ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
