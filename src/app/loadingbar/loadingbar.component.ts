/**
 * Loadingbar component
 */

import { LoadingBarService } from './loadingbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loadingbar',
	template: `<mat-progress-bar *ngIf="show" color="accent" [mode]="mode"></mat-progress-bar>`,
	styleUrls: ['./loadingbar.component.scss']
})
export class LoadingbarComponent implements OnInit {
	public mode: string;
	public show: boolean;
	constructor(private service: LoadingBarService) {
		this.mode = 'indeterminate';
		this.show = false;
	}

	ngOnInit(): void {
		this.service.loadingBarState.subscribe(state => {
			console.log('state: ', state);
		});
	}
}
