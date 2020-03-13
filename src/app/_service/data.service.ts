/**
 * Application data service
 */

import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import { PropertyEntry, PostgreSQLFieldDescription } from 'src/app/_models/properties.model';
import { Router } from '@angular/router';
import { PropertyDisplayModel } from './../_models/properties-display.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
	/* Attributes */
	private _tableList: string[];
	private _propertiesObservable: Observable<PropertyEntry[]>;
	private _propertiesObserver: Observer<PropertyEntry[]>;
	private _propertiesList: PropertyEntry[];
	private _httpHeaders: HttpHeaders;

	// Component specific providers

	// private _serveHome: Subject<
	/* CONSTRUCTOR */
	constructor(private http: HttpClient, private _router: Router) {
		console.log('_router: ', this._router);
		this._propertiesObservable = new Observable<PropertyEntry[]>((observer: Observer<PropertyEntry[]>) => {
			this._propertiesObserver = observer;
		});
		this._tableList = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
		this._httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf8' });
	}

	get tableList(): string[] {
		return this._tableList;
	}

	get providePropertiesData(): Observable<PropertyEntry[]> {
		return this._propertiesObservable;
	}

	set propertiesList(propertiesList: PropertyEntry[]) {
		this._propertiesList = propertiesList.map((row: PropertyEntry) => new PropertyEntry(...Object.values(row)));
	}

	get propertiesList(): PropertyEntry[] {
		return this._propertiesList;
	}

	emitLatestPropertiesList = (propertiesList: PropertyEntry[]): void => this._propertiesObserver.next(propertiesList);

	loadProperties = (limit: number): void => {
		this.http.get('CliffCrerar/fc4212be9495fab14ff6b491afc48bd5/raw/cdac10664b533a5a7576f7cd8e7c36c89608484a/propdata.json', { headers: this._httpHeaders })
			.subscribe((propertiesViewData: any) => {
				this.propertiesList = propertiesViewData.rows;
				this.emitLatestPropertiesList(this.propertiesList);
			});
	}

	// loadProperties = (limit: number): Observable<HttpResponseBase> => this.http.get<HttpResponseBase>('api?table=vproperties&limit=' + limit, { headers: this._httpHeaders });
}
