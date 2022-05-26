import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationalComponent } from './educational/educational.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { Portfolio1Component } from './portfolio1/portfolio1.component';
import { ResidentialComponent } from './residential/residential.component';

const routes: Routes = [
  {path:'', component:Portfolio1Component},
  {path:'commercial', component:CommercialComponent},
  {path:'educational', component:EducationalComponent},
  {path:'industrial', component:IndustrialComponent},
  {path:'residential', component:ResidentialComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PortfolioRoutingModule { }
