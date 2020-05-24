import { TestBed } from '@angular/core/testing';

import { DataService } from './data.service';
import { Observable } from 'rxjs';

describe('DataService', () => {
	let service: DataService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(DataService);
	});

	it('Should be created', () => {
		expect(service).toBeTruthy();
	});

	it('Should have table list of 7', () => {
		expect(service.tableList.length).toEqual(7);
	});

	it('Should be list of', () => {
		const tblList: string[] = ['property', 'contact_type', 'contact', 'address', 'estate', 'property_type', 'property_memo'];
		expect(service.tableList).toEqual(tblList);
	});

	it('Get waitToStartGettingData should return observable', () => {
		expect(service.waitToStartGettingData).toEqual(new Observable<boolean>());
	})
});
