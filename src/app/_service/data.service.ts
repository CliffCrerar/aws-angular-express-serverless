/**
 * Application data service
 */

import { Injectable } from '@angular/core';
import * as propModels from 'src/app/_models/properties.model';
import { Observable, Observer } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	/* Attributes */
	private _tableList: string[];
	private _waitGoAheadObservable: Observable<boolean>;
	private _waitGoAheadObserver: Observer<boolean>;
	constructor() {
		this._waitGoAheadObservable = new Observable<boolean>((observer: Observer<any>) => {
			this._waitGoAheadObserver = observer;
		});

		this._tableList = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
		console.log('propModels: ', propModels);
		console.log('this._waitGoAhead: ', this._waitGoAheadObservable);
	}

	get waitToStartGettingData(): Observable<boolean> {
		return this._waitGoAheadObservable;
	}

	get tableList(): string[] {
		return this._tableList;
	}

	startLoadingData(goAheadParam: boolean) {
		this._waitGoAheadObserver.next(goAheadParam);
	}
}
