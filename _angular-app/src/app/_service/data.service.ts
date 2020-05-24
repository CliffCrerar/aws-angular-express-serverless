/**
 * Application data service
 */

import { Injectable } from '@angular/core';
import { Observable, Observer, throwError } from 'rxjs';
import { PropertyEntry } from 'src/app/_models/properties.model';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DataService {
	/* Attributes */
	private _tableList: string[];
	private _propertiesObservable: Observable<PropertyEntry[]>;
	private _propertiesObserver: Observer<PropertyEntry[]>;
	private _propertiesList: PropertyEntry[];
	private _httpHeaders: HttpHeaders;
	private _propertiesAreLoaded: boolean;
	private _loadedPropertiesCount: number;

	/* CONSTRUCTOR */
	constructor(private http: HttpClient, private _router: Router) {
		this._propertiesObservable = new Observable<PropertyEntry[]>(
			(observer: Observer<PropertyEntry[]>) => { this._propertiesObserver = observer; });
		this._propertiesAreLoaded = false;
		this._tableList = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
		this._httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json;charset=utf8' });
	}

	get propertiesAreLoaded(): boolean { return this._propertiesAreLoaded; }

	set propertiesAreLoaded(state: boolean) { this._propertiesAreLoaded = state; }

	get loadedPropertiesCount(): number { return this._loadedPropertiesCount; }

	set loadedPropertiesCount(cnt: number) { this._loadedPropertiesCount = cnt; }

	get tableList(): string[] { return this._tableList; }

	get providePropertiesData(): Observable<PropertyEntry[]> { return this._propertiesObservable; }

	set propertiesList(propertiesList: PropertyEntry[]) {
		this._propertiesList = propertiesList.map((row: PropertyEntry) => new PropertyEntry(...Object.values(row)));
	}

	get propertiesList(): PropertyEntry[] { return this._propertiesList; }

	emitLatestPropertiesList = (propertiesList: PropertyEntry[]): void => this._propertiesObserver.next(propertiesList);

	loadProperties = (limit: number): void => {

		if (this.loadedPropertiesCount !== limit || !this.propertiesAreLoaded) {

			this.http.get(
				'CliffCrerar/fc4212be9495fab14ff6b491afc48bd5/raw/cdac10664b533a5a7576f7cd8e7c36c89608484a/propdata.json',
				{ headers: this._httpHeaders }
			).subscribe((propertiesViewData: any) => {

					this.loadedPropertiesCount = limit;

					this.propertiesAreLoaded = true;

					this.propertiesList = propertiesViewData.rows;

					this.emitLatestPropertiesList(this.propertiesList);

				});

		} else {

			this.emitLatestPropertiesList(this.propertiesList);

		}
	}

}
