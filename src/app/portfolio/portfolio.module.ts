import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { CommercialComponent } from './commercial/commercial.component';
import { EducationalComponent } from './educational/educational.component';
import { IndustrialComponent } from './industrial/industrial.component';
import { ResidentialComponent } from './residential/residential.component';
import { Portfolio1Component } from './portfolio1/portfolio1.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    CommercialComponent,
    EducationalComponent,
    IndustrialComponent,
    ResidentialComponent,
    Portfolio1Component
  ],
  imports: [
    CommonModule,
    PortfolioRoutingModule,
    RouterModule
  ]
})
export class PortfolioModule { }
