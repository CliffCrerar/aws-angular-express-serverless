/**
 * Loadingbar component
 */

import { LoadingBarService } from '../../_service/loadingbar.service';
import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loadingbar',
	template: `
		<mat-progress-bar  color="accent" [mode]="mode"></mat-progress-bar>
		`,
	styleUrls: ['./loadingbar.component.scss']
})
export class LoadingbarComponent implements OnInit {
	public mode: string;
	public showState: boolean;
	constructor(private service: LoadingBarService) {
		this.mode = 'indeterminate';
	}

	set state(state: boolean) {
		this.showState = state;
	}


	ngOnInit(): void {
		this.service.loadingBarState.subscribe(state => {
			console.log('state: ', state);
			// this.showState = state;
		});
	}
}
