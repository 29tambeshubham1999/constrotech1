import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MumbaiComponent } from './mumbai/mumbai.component';
import { PuneComponent } from './pune/pune.component';

const routes: Routes = [
  {path:'pune', component:PuneComponent},
  {path:'mumbai', component:MumbaiComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitiesRoutingModule { }
