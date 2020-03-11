import { LoadingBarService } from './_service/loadingbar.service';
import { HttpClient } from '@angular/common/http';
import { GetRequestModel } from './_models/http.model';

import { DataService } from './_service/data.service';
import { Component, OnInit, OnDestroy, HostListener } from '@angular/core';
import { Subscription} from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.scss']
})
export class AppComponent {
	/* ATTRIBUTES */
	/* CONSTRUCTOR */
	constructor(
		private dataService: DataService,
	) {
		// this.requestObject = new GetRequestModel('table', 'address');

	}
}

// if (typeof Worker !== 'undefined') {
// 	// Create a new
// 	const worker = new Worker('./app.worker', { type: 'module' });
// 	worker.onmessage = ({ data }) => {
// 		console.log(`page got message: ${data}`);
// 	};
// 	worker.postMessage('hello');
// } else {
// 	// Web Workers are not supported in this environment.
// 	// You should add a fallback so that your program still executes correctly.
// }
