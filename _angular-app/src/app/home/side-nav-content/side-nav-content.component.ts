/**
 * Side nav component
 */

import { Subscription } from 'rxjs';
import { DataService } from 'src/app/_service/data.service';
import { Component, OnInit, OnDestroy, Input, AfterViewInit, ElementRef, Output,EventEmitter } from '@angular/core';
import { CrossComponentMessagingService } from 'src/app/_service/cross-comp-messaging.service.service';
import { SideNavStaticView, SideNavOption } from 'src/app/_models/side-nav-ui-data.model';
import { ViewChild } from '@angular/core';
import { MatListOption, MatSelectionListChange } from '@angular/material/list';

@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit, AfterViewInit, OnDestroy {
	/* Attributes */

	@ViewChild('editOption') editOption: MatListOption;
	@Output() sideNavUpdate: EventEmitter<{sectionTitle: string}>;

	private _tableNameList: string[];
	public uiData: SideNavOption[];
	private _crossCommsSubscription: Subscription;
	public editActive: boolean;

	/** CONSTRUCTOR */
	constructor(private dataService: DataService, private crossComms: CrossComponentMessagingService) {
		this.sideNavUpdate = new EventEmitter<{sectionTitle: string}>();
		this.uiData = SideNavStaticView.sideNavListArray;
		this.editActive = false;
	}
	/* HOOKS */
	ngOnInit(): void {
		console.log(this.editOption);

		this.crossComms.activateEditSubject.subscribe((switchEdit: boolean) => {
			console.log('Turn Edit On');
			switchEdit
				? this.activateEdit()
				: this.deactivateEdit();
		});
	}
	ngOnDestroy = () => {
		this._crossCommsSubscription.unsubscribe();
	}
	ngAfterViewInit() {
		console.log('editOption: ', this.editOption);
	}

	/* METHODS */
	onUserSelection(event: MatSelectionListChange) {
		this.sideNavUpdate.emit({sectionTitle: event.option.value});
	}

	activateEdit() {
		this.editActive = true;
		this.editOption.selected = true;
	}

	deactivateEdit() {
		this.editActive = false;
	}

}
