
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppNavBarComponent, AppHeaderComponent } from './app-temp-keep';
import { LandingComponent } from './landing/landing.component';
import { PropertyformComponent } from './propertyform/propertyform.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { HttpClientModule } from '@angular/common/http';
import { DataService } from './_service/data.service';
import { LoadingbarComponent } from './loadingbar/loadingbar.component';


@NgModule({
	declarations: [
		AppComponent,
		AppNavBarComponent,
		AppHeaderComponent,
		LandingComponent,
		PropertyformComponent,
		HomeComponent,
		LoadingbarComponent,

	],
	imports: [
		BrowserModule,
		HttpClientModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatCardModule,
		MatToolbarModule,
		MatSidenavModule,
		MatListModule,
		MatIconModule,
		MatDividerModule,
		MatButtonModule,
		MatProgressBarModule
	],
	providers: [ DataService],
	bootstrap: [AppComponent]
})
export class AppModule { }
