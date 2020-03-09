import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingBarService {
	private _loadingBarSubject: Subject<string>;

	constructor() {
		this._loadingBarSubject = new Subject<string>();
	}

	set switchLoadingBar(toState: string) {
		this._loadingBarSubject.next(toState);
	}

	get loadingBarState(): Subject<string> {
		return this._loadingBarSubject;
	}
}
