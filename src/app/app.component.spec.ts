import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { AppNavBarComponent } from './home/app-temp-keep';

describe('AppComponent', () => {
	beforeEach(async(() => {
		TestBed.configureTestingModule({
			imports: [
				RouterTestingModule
			],
			declarations: [
				AppComponent,
				AppNavBarComponent

			],
		}).compileComponents();
	}));

	xit('should create the app', () => {
		const fixture = TestBed.createComponent(AppComponent);
		const app = fixture.componentInstance;
		expect(app).toBeTruthy();
	});

	xit('should create navbar', () => {
		const nav = TestBed.createComponent(AppNavBarComponent);
		expect(nav.componentInstance).toBeTruthy();
	});

	xit('should have onInit', () => {
		const nav = TestBed.createComponent(AppNavBarComponent);
		expect(nav.componentInstance.ngOnInit).toBeTruthy();
	});

	xit('Should nav be stable', () => {
		const nav = TestBed.createComponent(AppNavBarComponent);
		expect(nav.isStable).toBeTruthy();
	});


	// it('should render title', () => {
	// 	const fixture = TestBed.createComponent(AppComponent);
	// 	fixture.detectChanges();
	// 	const compiled = fixture.nativeElement;
	// 	expect(compiled.querySelector('.content span').textContent).toContain('app app is running!');
	// });
});
