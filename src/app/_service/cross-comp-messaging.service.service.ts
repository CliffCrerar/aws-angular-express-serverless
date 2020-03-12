import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class CrossComponentMessagingService {

	public activateEditSubject: Subject<boolean>;

	constructor() {
		this.activateEditSubject = new Subject<boolean>();
	}
}
