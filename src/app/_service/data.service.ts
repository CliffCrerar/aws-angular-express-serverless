/**
 * Application data service
 */

import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PropertiesList, PostgreSQLFieldDescription } from 'src/app/_models/properties.model';
import { Router } from '@angular/router';
import { PropertyDisplayModel } from './../_models/properties-display.model';
import { HttpClient, HttpResponseBase, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
	/* Attributes */
	private _tableList: string[];
	private _propertiesObservable: Observable<PropertiesList[]>;
	private _propertiesObserver: Observer<PropertiesList[]>;
	private _propertiesList: PropertiesList[];
	private _propertiesFields: PostgreSQLFieldDescription[];
	private _currentProperty: PropertyDisplayModel;
	private _httpHeaders: HttpHeaders;
	/* CONSTRUCTOR */
	constructor(private http: HttpClient, private _router: Router) {
		console.log('_router: ', this._router);
		this._propertiesObservable = new Observable<PropertiesList[]>((observer: Observer<PropertiesList[]>) => {
			this._propertiesObserver = observer;
		});
		this._tableList = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
		this._httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf8' });
	}

	get tableList(): string[] {
		return this._tableList;
	}

	get latestPropertiesList(): Observable<PropertiesList[]> {
		return this._propertiesObservable;
	}

	get currentProperty(): PropertyDisplayModel {
		return this._currentProperty;
	}

	set currentProperty(currentProperty: PropertyDisplayModel) {
		this._currentProperty = currentProperty;
	}

	set propertiesList(propertiesList: PropertiesList[]) {
		this._propertiesList = propertiesList;
	}

	get propertiesList(): PropertiesList[] {
		return this._propertiesList;
	}

	get propertiesFields(): PostgreSQLFieldDescription[] {
		return this._propertiesFields;
	}

	set propertiesFields(fields: PostgreSQLFieldDescription[]) {
		this._propertiesFields = fields;
	}

	emitLatestPropertiesList = (propertiesList: PropertiesList[]): void => this._propertiesObserver.next(propertiesList);

	loadProperties = (limit: number): Observable<HttpResponseBase> => this.http.get<HttpResponseBase>('CliffCrerar/fc4212be9495fab14ff6b491afc48bd5/raw/cdac10664b533a5a7576f7cd8e7c36c89608484a/propdata.json', { headers: this._httpHeaders });

	// loadProperties = (limit: number): Observable<HttpResponseBase> => this.http.get<HttpResponseBase>('api?table=vproperties&limit=' + limit, { headers: this._httpHeaders });
}
