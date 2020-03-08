import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent, AppHeaderComponent } from './app-temp-keep';
import { LandingComponent } from './landing/landing.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
	AppComponent,
	AppNavBarComponent,
	AppHeaderComponent,
	LandingComponent,
	PropertyformComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
	BrowserAnimationsModule,
	MatCardModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
