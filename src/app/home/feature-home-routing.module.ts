import { HomeComponent } from './home.component';
import { PropertiesViewComponent } from 'src/app/home/properties-view/properties-view.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{
		path: 'home', component: HomeComponent, data: { title: 'Home' },
		children: [
			{ path: '', redirectTo: 'properties', pathMatch: 'prefix' },
			{ path: 'properties', component: PropertiesViewComponent, data: { title: 'Properties View' } }
		]
	}

];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class FeatureRoutingModule { }
