
/**
 * Application data service
 */
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Observer, from } from 'rxjs';
import { Properties, PostgreSQLFieldDescription } from 'src/app/_models/properties.model';

@Injectable({
	providedIn: 'root'
})
export class DataService {
	/* Attributes */
	private _tableList: string[];
	private _waitGoAheadObservable: Observable<boolean>;
	private _waitGoAheadObserver: Observer<boolean>;
	private _propertiesObservable: Observable<Properties[]>;
	private _propertiesObserver: Observer<Properties[]>;
	private _properties: Properties[];
	private _propertiesFields: PostgreSQLFieldDescription[];
	constructor(private http: HttpClient) {
		this._propertiesObservable = new Observable<Properties[]>((observer: Observer<Properties[]>) => {
			this._propertiesObserver = observer;
		})
		this._waitGoAheadObservable = new Observable<boolean>((observer: Observer<any>) => {
			this._waitGoAheadObserver = observer;
		});
		this._tableList = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
	}

	get waitForData(): Observable<boolean> {
		return this._waitGoAheadObservable;
	}

	get tableList(): string[] {
		return this._tableList;
	}

	set properties(properties: Properties[]) {
		this._properties = properties.map(row => new Properties(...Object.values(row)));
	}

	set propertiesFields(fields: PostgreSQLFieldDescription[]) {
		this._propertiesFields = fields.map(field => new PostgreSQLFieldDescription(...Object.values(field)));
	}

	get latestPropertiesList() {
		return this._propertiesObservable;
	}

	emitLatestPropertiesList(propertiesList: Properties[]): void {
		return this._propertiesObserver.next(propertiesList);
	}

	startLoadingData(goAheadParam: boolean): void {
		this._waitGoAheadObserver.next(goAheadParam);
	}

	loadProperties(): Observable<any> {
		return this.http.get('api?table=vproperties');
	}

	fetchAllTables(): void {
		const promiseArray: Promise<any>[] = [];
		from(this.tableList).subscribe((table: string) => {
			const httpGetPromise = this.http.get(`./api?table=${table}`).toPromise();
			promiseArray.push(httpGetPromise);
			if (promiseArray.length === this.tableList.length) {
				Promise.all(promiseArray).then(res => console.log(res));
			}
		});
	}
}
