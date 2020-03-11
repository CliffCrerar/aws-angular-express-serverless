
import { DataService } from 'src/app/_service/data.service';
import { Component, OnInit, QueryList } from '@angular/core';
import { MatListOption } from '@angular/material/list';


@Component({
	selector: 'app-side-nav-content',
	templateUrl: './side-nav-content.component.html',
	styleUrls: ['./side-nav-content.component.scss']
})
export class SideNavContentComponent implements OnInit {

	tableList: string[];

	tableNames: string[] = ['Properties', 'Contacts', 'Address list', 'Estates', 'Property Types',''];
	icons: string[] = ['stars', 'assignment_ind', 'contact_mail', 'account_balance', 'store',''];

	constructor(private dataService: DataService) {
		this.tableList = this.dataService.tableList;
	}

	ngOnInit(): void { }

	onUserSelection(event){
		console.log('event: ', event);

	}

}
