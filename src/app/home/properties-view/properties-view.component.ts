import { LoadingBarService } from 'src/app/_service/loadingbar.service';
import { Subscription } from 'rxjs';
import { PropertiesList, PostgreSQLFieldDescription } from 'src/app/_models/properties.model';
import { DataService } from 'src/app/_service/data.service';
import { Component, OnInit, OnDestroy, Input } from '@angular/core';

@Component({
	selector: 'app-properties-view',
	templateUrl: './properties-view.component.html',
	styleUrls: ['./properties-view.component.scss']
})
export class PropertiesViewComponent implements OnInit, OnDestroy {

	panelOpenState
	panelClosedtate

	private _dataServiceSubscription: Subscription;
	public propertiesList: PropertiesList[];
	constructor(private dataService: DataService, private loadingService: LoadingBarService) {
		this.propertiesList = [];
		console.log('loading this');
	}
	ngOnInit(): void {
		this.dataService.loadProperties().subscribe(propertiesView => {
			this.propertiesList = propertiesView.rows.map((row: PropertiesList) => new PropertiesList(...Object.values(row)));
			console.log('this.propertiesList: ', this.propertiesList);
			this.dataService.propertiesFields = propertiesView.fields
				.map((field: PostgreSQLFieldDescription) => new PostgreSQLFieldDescription(...Object.values(field)));
			this.loadingService.switchLoadingBar = 'off';
			this.dataService.propertiesList = this.propertiesList;
		});
	}
	ngOnDestroy() {
		this._dataServiceSubscription.unsubscribe();
	}

	onUserSelection(event){

	}
}
