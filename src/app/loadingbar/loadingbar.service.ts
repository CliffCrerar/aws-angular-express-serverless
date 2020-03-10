import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class LoadingBarService {
	private _loadingBarSubject: Subject<boolean>;
	private _state = false;
	constructor() {
		this._loadingBarSubject = new Subject<boolean>();
		this._loadingBarSubject.next(this._state);
	}

	set switchLoadingBar(toState: boolean) {
		this._loadingBarSubject.next(toState);
	}

	get loadingBarState(): Subject<boolean> {
		return this._loadingBarSubject;
	}
}
