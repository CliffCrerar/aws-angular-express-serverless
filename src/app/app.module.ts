import { DataService } from 'src/app/_service/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './material-app.module';
import { FeatureHomeModule } from './home/feature-home.module';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
	declarations: [
		AppComponent,
		LandingComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		MaterialAppModule,
		AppRoutingModule,
		HttpClientModule,
		FeatureHomeModule
	],
	providers: [DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
