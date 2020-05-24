import { ConsoleLogPipe } from 'src/app/_pipes/console-log.pipe';
import { DataService } from 'src/app/_service/data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeatureRoutingModule } from './feature-home-routing.module';
import { MaterialAppModule } from './../material-app.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppNavBarComponent } from 'src/app/home/app-temp-keep';
import { SideNavContentComponent } from 'src/app/home/side-nav-content/side-nav-content.component';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertiesViewComponent } from 'src/app/home/properties-view/properties-view.component';
import { LoadingbarComponent } from './loadingbar/loadingbar.component';
import { AddEditPropertiesComponent } from './add-edit-properties/add-edit-properties.component';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import { PropertyTypesComponent } from './property-types/property-types.component';
import { AddressListComponent } from './address-list/address-list.component';
import { MainNavbarComponent } from './main-navbar/main-navbar.component';



@NgModule({
	declarations: [
		HomeComponent,
		PropertiesViewComponent,
		HomeComponent,
		SideNavContentComponent,
		AppNavBarComponent,
		LoadingbarComponent,
		ConsoleLogPipe,
		AddEditPropertiesComponent,
		ContactsViewComponent,
		PropertyTypesComponent,
		AddressListComponent,
		MainNavbarComponent
	],
	imports: [

	BrowserAnimationsModule,
		BrowserModule,
		CommonModule,
		MaterialAppModule,
		FeatureRoutingModule,
	],
	providers: [DataService],
	bootstrap: [HomeComponent]
})
export class FeatureHomeModule { }
