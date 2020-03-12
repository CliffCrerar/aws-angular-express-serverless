import { Subscription } from 'rxjs';


import { DataService } from 'src/app/_service/data.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { CrossComponentMessagingService } from 'src/app/_service/cross-comp-messaging.service.service';


@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit, OnDestroy {

	public editShowHide = false;
	public editSelectedOption = '';

	public tableList: string[];
	public tableNames: string[] = ['Properties', 'Contacts', 'Address list', 'Estates', 'Property Types'];
	public icons: string[] = ['stars', 'assignment_ind', 'contact_mail', 'account_balance', 'store'];
	private _crossCommsSubscription: Subscription;

	constructor(private dataService: DataService, private crossComms: CrossComponentMessagingService) {
		this.tableList = this.dataService.tableList.slice(0, this.tableNames.length);
	}

	ngOnInit(): void {
		function 	activateEdit() {
			this.editShowHide = true;
			this.editSelectedOption = 'mat-list-single-selected-option';
		}


		this.crossComms.activateEditSubject.subscribe((switchEdit: boolean) => {
			switchEdit ? activateEdit() : this.deactivateEdit();
		})


	}

	ngOnDestroy() {
		this._crossCommsSubscription.unsubscribe();
	}

	onUserSelection(event) {
		console.log('event: ', event);

	}



	deactivateEdit() {

	}



}
