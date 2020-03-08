import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent, AppHeaderComponent } from './app-temp-keep';
import { LandingComponent } from './landing/landing.component';
import { PropertyformComponent } from './propertyform/propertyform.component';

@NgModule({
  declarations: [
	AppComponent,
	AppNavBarComponent,
	AppHeaderComponent,
	LandingComponent,
	PropertyformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
