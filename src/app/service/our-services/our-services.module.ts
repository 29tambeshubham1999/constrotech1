import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OurServicesRoutingModule } from './our-services-routing.module';
import { ArchitecturaldesignComponent } from './architecturaldesign/architecturaldesign.component';
import { ConsructionComponent } from './consruction/consruction.component';
import { GreenbuildingComponent } from './greenbuilding/greenbuilding.component';
import { HouserenovationComponent } from './houserenovation/houserenovation.component';
import { ReconstructionComponent } from './reconstruction/reconstruction.component';
import { Service1Component } from './service1/service1.component';


@NgModule({
  declarations: [
    ArchitecturaldesignComponent,
    ConsructionComponent,
    GreenbuildingComponent,
    HouserenovationComponent,
    ReconstructionComponent,
    Service1Component
  ],
  imports: [
    CommonModule,
    OurServicesRoutingModule
  ]
})
export class OurServicesModule { }
