import { DataService } from './../_service/data.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';



describe('LandingComponent', () => {
	let component: LandingComponent;
	let fixture: ComponentFixture<LandingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatCardModule],
			declarations: [LandingComponent],
			providers: [DataService]

		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(LandingComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});

	xit('should contain mat-card', () => {
		expect(component).toContain('mat-card');
	});


	it('Should have data service', async () => {
		// const fixture = TestBed.createComponent(LandingComponent);
		expect(component.dataService).toBeTruthy();
	});

});
