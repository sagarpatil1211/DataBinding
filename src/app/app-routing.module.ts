import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Assignment3Component } from './assignment3/assignment3.component';
import { Assignment4Component } from './assignment4/assignment4.component';
import { HomeComponent } from './home/home.component';
import { OneWayBindingComponent } from './one-way-binding/one-way-binding.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TwowaybindingComponent } from './twowaybinding/twowaybinding.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:'home', component:HomeComponent},
  {path:'one-way-binding', component:OneWayBindingComponent},
  {path:'assignment3', component:Assignment3Component},
  {path:'assignment4', component:Assignment4Component},
  {path:'twowaybinding', component:TwowaybindingComponent},
  {path:'**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
