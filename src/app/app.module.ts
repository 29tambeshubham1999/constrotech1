import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from "@angular/common"


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesModule } from './city/cities/cities.module';
import { ContactUsModule } from './contact/contact-us/contact-us.module';
import { HomeModule } from './home/home/home.module';
import { OurServicesModule } from './service/our-services/our-services.module';
import { FacilitiesComponent } from './home/facilities/facilities.component';
import { FutureworkComponent } from './home/futurework/futurework.component';
import { AboutusComponent } from './home/aboutus/aboutus.component';
import { Home1Component } from './home/home1/home1.component';
import { HeaderComponent } from './header-footer/header/header.component';
import { FooterComponent } from './header-footer/footer/footer.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FacilitiesComponent,
    FutureworkComponent,
    AboutusComponent,
    Home1Component,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CitiesModule,
    ContactUsModule,
    HomeModule,
    OurServicesModule,
    HttpClientModule,
    CommonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
 
 }
