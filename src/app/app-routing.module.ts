import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'home', loadChildren:()=> import ('./home/home/home.module').then(mod=>mod.HomeModule)},
  {path:'ourServices', loadChildren:()=> import ('./service/our-services/our-services.module').then(mod=>mod.OurServicesModule)},
  {path:'cities', loadChildren:()=> import ('./city/cities/cities.module').then(mod=>mod.CitiesModule)},
  {path:'contactUs', loadChildren:()=> import('./contact/contact-us/contact-us.module').then(mod=>mod.ContactUsModule)},
  {path:'portFolio', loadChildren:()=> import('./portfolio/portfolio.module').then(mod=>mod.PortfolioModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
