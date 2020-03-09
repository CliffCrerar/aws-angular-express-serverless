import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { MatCardModule } from '@angular/material/card';



describe('LandingComponent', () => {
	let component: LandingComponent;
	let fixture: ComponentFixture<LandingComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [MatCardModule],
			declarations: [LandingComponent]

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
});
