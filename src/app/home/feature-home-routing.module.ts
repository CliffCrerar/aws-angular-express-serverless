/**
 * Feature Module Home Component
 */
import { AddEditPropertiesComponent } from './add-edit-properties/add-edit-properties.component';
import { HomeComponent } from './home.component';
import { PropertiesViewComponent } from 'src/app/home/properties-view/properties-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactsViewComponent } from './contacts-view/contacts-view.component';
import {AddressListComponent} from 'src/app/home/address-list/address-list.component';

const routes: Routes = [
	{
		path: 'home',
		component: HomeComponent,
		data: { title: 'Home' },
		children: [
			{
				path: '',
				redirectTo: 'properties',
				pathMatch: 'prefix'
			},
			{
				path: 'properties-list',
				component: PropertiesViewComponent,
				data: { title: 'Properties View' }
			},
			{
				path: 'address-list',
				component: AddressListComponent,
				data: { title: 'Addresses' }
			},
			{
				path: 'contacts-list',
				component: ContactsViewComponent,
				data: { title: 'Contacts' }
			},
			{
				path: 'estate-list',
				component: AddEditPropertiesComponent,
				data: { title: '' }
			},
			{
				path: 'add-edit-properties/:propertyid',
				component: AddEditPropertiesComponent,
				data: { title: '' }
			}
		]
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FeatureRoutingModule { }
