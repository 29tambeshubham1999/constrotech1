import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CitiesRoutingModule } from './cities-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CitiesRoutingModule
  ]
})
export class CitiesModule { 
public cities:any=['pune','mumbai','raigad','solapur'];
  constructor(){

  }
}
