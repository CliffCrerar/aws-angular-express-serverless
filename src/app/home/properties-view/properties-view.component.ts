import { PropertyDisplayModel } from './../../_models/properties-display.model';
import { LoadingBarService } from 'src/app/_service/loadingbar.service';
import { Subscription } from 'rxjs';
import { PropertiesList, PostgreSQLFieldDescription } from 'src/app/_models/properties.model';
import { DataService } from 'src/app/_service/data.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { MatExpansionPanel } from '@angular/material/expansion';

@Component({
	selector: 'app-properties-view',
	templateUrl: './properties-view.component.html',
	styleUrls: ['./properties-view.component.scss']
})
export class PropertiesViewComponent implements OnInit, OnDestroy {
	public headers: string[] = ['no', 'Estate', 'Type', 'Short Address', 'Suburb', 'City'];
	panel;
	public panelOpenState: boolean;
	public panelClosedState: boolean;
	public propertiesList: PropertiesList[];
	public currentProperty: PropertyDisplayModel;
	private _dataServiceSubscription: Subscription;
	constructor(private dataService: DataService, private loadingService: LoadingBarService) {
		this.propertiesList = [];
	}
	ngOnInit(): void {
		this.dataService.loadProperties(10).subscribe(({ rows, fields }: any) => {
			this.propertiesList = rows.map((row: PropertiesList) => new PropertiesList(...Object.values(row)));
			this.dataService.propertiesFields = fields.map((field: PostgreSQLFieldDescription) => new PostgreSQLFieldDescription(...Object.values(field)));
			this.loadingService.switchLoadingBar = 'off';
			this.dataService.propertiesList = this.propertiesList;
			this.currentProperty = new PropertyDisplayModel(this.propertiesList[0]);
			this.dataService.currentProperty = this.currentProperty;
		});
	}
	ngOnDestroy() {
		this._dataServiceSubscription.unsubscribe();
	}
	onExpanderClick(id: string) {
		this.currentProperty = new PropertyDisplayModel(this.propertiesList.filter(propertyEntry => propertyEntry.propertyid)[0]);
		console.log('this.currentProperty: ', this.currentProperty);

	}
}
