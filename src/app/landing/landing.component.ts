
/**
 * Application landing component
 */

import { Component, OnInit, HostListener, ViewChild, AfterViewInit, ElementRef } from '@angular/core';
import { DataService } from './../_service/data.service';

@Component({
	selector: 'app-landing',
	templateUrl: './landing.component.html',
	styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {

	/* ATTRIBUTES */
	@ViewChild('matCard', { static: false }) matCard: ElementRef<any>;

	public cardHover: boolean;
	public linkToHome: string;
	/* CONSTRUCTOR */
	constructor(private _dataService: DataService) {
		this.linkToHome = '/home';
		this.cardHover = false;
	}
	/* HOOKS */
	ngOnInit(): void {
	}

	ngAfterViewInit() {
	}

	/* GET SET */
	get dataService() {
		return this._dataService; // for testing
	}

	onEnterClick() {
		this.dataService.startLoadingData(true);
	}
}
