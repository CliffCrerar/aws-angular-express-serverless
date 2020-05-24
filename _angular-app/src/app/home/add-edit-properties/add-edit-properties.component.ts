import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrossComponentMessagingService } from '../../_service/cross-comp-messaging.service.service';

@Component({
	selector: 'app-edit-properties',
	templateUrl: './add-edit-properties.component.html',
	styleUrls: ['./add-edit-properties.component.scss']
})
export class AddEditPropertiesComponent implements OnInit, OnDestroy {

	constructor(private communicate: CrossComponentMessagingService) { }

	ngOnInit(): void {
		this.communicate.activateEditSubject.next(true);
	}
	ngOnDestroy(){
		this.communicate.activateEditSubject.next(false);
	}
}
