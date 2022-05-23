import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from '../aboutus/aboutus.component';
import { FacilitiesComponent } from '../facilities/facilities.component';
import { FutureworkComponent } from '../futurework/futurework.component';
import { Home1Component } from '../home1/home1.component';

const routes: Routes = [
  {path:'', component:Home1Component},
  {path:'home/aboutUs', component:AboutusComponent},
  {path:'home/facilities', component:FacilitiesComponent},
  {path:'home/futureWork', component:FutureworkComponent},
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
