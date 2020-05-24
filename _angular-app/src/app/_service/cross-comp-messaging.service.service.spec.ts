import { TestBed } from '@angular/core/testing';

import { CrossComponentMessagingService } from './cross-comp-messaging.service.service';

describe('CrossCompMessaging.ServiceService', () => {
	let service: CrossComponentMessagingService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CrossComponentMessagingService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
