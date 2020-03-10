import { LoadingBarService } from './loadingbar/loadingbar.service';
import { Address } from './_models/properties.model';
import { HttpClient } from '@angular/common/http';
import { GetRequestModel } from './_models/http.model';

import { DataService } from './_service/data.service';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription, from, Observer, OperatorFunction, Observable, Operator } from 'rxjs';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
	/* ATTRIBUTES */
	requestObject: GetRequestModel;
	dataServiceSubscription: Subscription;
	emitTables: Subscription;
	tableLoadCount = 0;
	promiseArray: Promise<any>[];
	httpClient: HttpClient;
	/* CONSTRUCTOR */
	constructor(
		private dataService: DataService,
		private http: HttpClient,
		private loadingBar: LoadingBarService
	) {
		this.requestObject = new GetRequestModel('table', 'address');
		this.promiseArray = [];
		this.httpClient = this.http;
	}

	ngOnInit() {
		// Bring the SQL data into the a service;
		this.dataServiceSubscription = this.dataService.waitForData
			.subscribe((startLoading: boolean): void => {
				console.log('startLoading: ', startLoading);
				this.loadingBar.switchLoadingBar = startLoading;
				if (startLoading) {
					this.dataService.loadProperties().subscribe(propertiesView => {
						this.dataService.properties = propertiesView.rows;
						this.dataService.propertiesFields = propertiesView.fields;
					});
				}
			}
		);
	}


	ngOnDestroy() {
		this.dataServiceSubscription.unsubscribe();
		// this.emitTables.unsubscribe();
	}
}

// if (typeof Worker !== 'undefined') {
// 	// Create a new
// 	const worker = new Worker('./app.worker', { type: 'module' });
// 	worker.onmessage = ({ data }) => {
// 		console.log(`page got message: ${data}`);
// 	};
// 	worker.postMessage('hello');
// } else {
// 	// Web Workers are not supported in this environment.
// 	// You should add a fallback so that your program still executes correctly.
// }
