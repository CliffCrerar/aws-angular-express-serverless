/**
 * Application data service
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, from, throwError } from 'rxjs';
import { PropertiesList, PostgreSQLFieldDescription } from 'src/app/_models/properties.model';
import { Router } from '@angular/router';

@Injectable()
export class DataService {
	/* Attributes */
	private _tableList: string[];
	private _propertiesObservable: Observable<PropertiesList[]>;
	private _propertiesObserver: Observer<PropertiesList[]>;
	private _propertiesList: PropertiesList[];
	private _propertiesFields: PostgreSQLFieldDescription[];
	/* CONSTRUCTOR */
	constructor(private http: HttpClient, private _router: Router) {
		console.log('_router: ', this._router);
		this._propertiesObservable = new Observable<PropertiesList[]>((observer: Observer<PropertiesList[]>) => {
			this._propertiesObserver = observer;
		});
		this._tableList = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
	}

	get tableList(): string[] {
		return this._tableList;
	}

	get latestPropertiesList() {
		return this._propertiesObservable;
	}

	set propertiesList(propertiesList: PropertiesList[]) {
		this._propertiesList = propertiesList;
	}

	get propertiesList(): PropertiesList[] {
		return this._propertiesList;
	}

	set propertiesFields(fields: PostgreSQLFieldDescription[]) {
		this._propertiesFields = fields;
	}

	emitLatestPropertiesList(propertiesList: PropertiesList[]): void {
		return this._propertiesObserver.next(propertiesList);
	}

	loadProperties(): Observable<any> {
		const call = this.http.get('api?table=vproperties');
		console.log('call: ', call);
		call.pipe().subscribe(res => console.log(res), err => throwError(err));
		return call
	}
}
