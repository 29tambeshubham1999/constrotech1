import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchitecturaldesignComponent } from './architecturaldesign/architecturaldesign.component';
import { ConsructionComponent } from './consruction/consruction.component';
import { GreenbuildingComponent } from './greenbuilding/greenbuilding.component';
import { HouserenovationComponent } from './houserenovation/houserenovation.component';
import { ReconstructionComponent } from './reconstruction/reconstruction.component';
import { Service1Component } from './service1/service1.component';

const routes: Routes = [
  {path:'', component:Service1Component},
  {path:'ourServices/architectural', component:ArchitecturaldesignComponent},
  {path:'ourServices/construction', component:ConsructionComponent},
  {path:'ourServices/greenBuilding', component:GreenbuildingComponent},
  {path:'ourServices/houseRenovation', component:HouserenovationComponent},
  {path:'ourServices/reconstruction', component: ReconstructionComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OurServicesRoutingModule { }
