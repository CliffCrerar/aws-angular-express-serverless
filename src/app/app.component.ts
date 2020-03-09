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
		private http: HttpClient
	) {
		this.requestObject = new GetRequestModel('table', 'address');
		this.promiseArray = [];
		this.httpClient = this.http;
	}

	ngOnInit() {

		// Bring the SQL data into the a service;
		this.dataServiceSubscription = this.dataService.waitToStartGettingData
			.subscribe((startLoading: boolean): void => {
				if (startLoading) {
					this.emitTables = from(this.dataService.tableList).subscribe((table: string) => {
						const httpGetPromise = this.http.get(`./api?table=${table}`).toPromise();
						this.promiseArray.push(httpGetPromise);
						if (this.promiseArray.length === this.dataService.tableList.length) {
							Promise.all(this.promiseArray).then(res => console.log(res));
						}
					});
				}
			});
	}

	@HostListener('window:')
	getDataAgain(){
		console.log('get data again');
	}


	ngOnDestroy() {
		this.dataServiceSubscription.unsubscribe();
		this.emitTables.unsubscribe();
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
