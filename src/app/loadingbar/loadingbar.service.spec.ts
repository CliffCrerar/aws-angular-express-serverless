import { TestBed } from '@angular/core/testing';

import { LoadingBarService } from './loadingbar.service';

describe('LoadingBarService', () => {
	let service: LoadingBarService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(LoadingBarService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
