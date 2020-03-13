/**
 * Properties View Component
 */

import { Subscription } from 'rxjs';
import { PropertyDisplayModel } from 'src/app/_models/properties-display.model';
import { LoadingBarService } from 'src/app/_service/loadingbar.service';
import { PropertyEntry } from 'src/app/_models/properties.model';
import { DataService } from 'src/app/_service/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-properties-view',
	// template: '<div>temp other</div>',
	templateUrl: './properties-view.component.html',
	styleUrls: ['./properties-view.component.scss']
})
export class PropertiesViewComponent implements OnInit, OnDestroy {
	/* ATTRIBUTES */
	public headers: string[] = ['no', 'Estate', 'Type', 'Short Address', 'Suburb', 'City'];
	public panelOpenState: boolean;
	public panelClosedState: boolean;
	public propertiesList: PropertyEntry[];
	private _dataServiceSubscription: Subscription;
	/* CONSTRUCTOR */
	constructor(private dataService: DataService, private loadingService: LoadingBarService) {
		this.propertiesList = [];
	}
	/* HOOKS */
	ngOnInit(): void {
		this.dataService.loadProperties(10);
		this.dataService.providePropertiesData.subscribe((propertiesData: PropertyEntry[]) => {
			this.propertiesList = propertiesData;
		});
	}
	ngOnDestroy() {
		this._dataServiceSubscription.unsubscribe();
	}
}
