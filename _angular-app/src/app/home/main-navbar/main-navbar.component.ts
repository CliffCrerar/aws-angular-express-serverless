/**
 * App Main Navbar
 */

import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'app-main-navbar',
	templateUrl: './main-navbar.component.html',
	styleUrls: ['./main-navbar.component.scss']
})
export class MainNavbarComponent implements OnInit {
	@Input('navBarTitle') navBarTitle: string;
	@Input('appSectionTitle') appSectionTitle: string;
	constructor() { }

	ngOnInit(): void {

	}

}
