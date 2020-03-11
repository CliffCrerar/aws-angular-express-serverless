import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingBarService {
	private _loadingBarSubject: Subject<boolean>;

	constructor() {
		this._loadingBarSubject = new Subject<boolean>();
		// this._loadingBarSubject.next(this._state);
	}

	set switchLoadingBar(toState: string) {
		switch (toState) {
			case 'off': this._loadingBarSubject.next(false); break;
			case 'on': this._loadingBarSubject.next(true); break;
		}

	}

	get loadingBarState(): Subject<boolean> {
		return this._loadingBarSubject;
	}
}
