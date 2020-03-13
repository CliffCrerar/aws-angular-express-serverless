/**
 * The values of the current property being viewed, edited, added
 */

import { PropertiesEntry } from './properties.model';

interface FieldDescription {
	key: string;
	value: string | number;
	title: string;
}

export class PropertyDisplayModel {
	readonly __propertyid: number = null;
	readonly _estateid: number = null;
	readonly _addressid: number = null;
	readonly _propertytypeid: number = null;
	readonly _ownerid: number = null;
	readonly _residentid: number = null;
	public estate: FieldDescription[];
	public address: FieldDescription[];
	public propertyType: FieldDescription[];
	public owner: FieldDescription[];
	public resident: FieldDescription[];

	constructor(propertyEntry?: PropertiesEntry) {
		const kvArr = Object.entries(propertyEntry);
		this.__propertyid = propertyEntry.propertyid;
		this._estateid = propertyEntry.estateid;
		this._addressid = propertyEntry.addressid;
		this._ownerid = propertyEntry.ownerid;
		this._propertytypeid = propertyEntry.propertytypeid;
		this._residentid = propertyEntry.residentid;
		this.estate = this._fieldDescription(kvArr, 2);
		this.address = this._fieldDescription(kvArr, 4, 11);
		this.propertyType = this._fieldDescription(kvArr, 13);
		this.owner = this._fieldDescription(kvArr, 15, 18);
		this.resident = this._fieldDescription(kvArr, 20, 23);
	}
	protected _fieldDescription(arr: [string, any][], from: number, to: number = from): FieldDescription[] {
		const fieldDescriptions = new Array<FieldDescription>();
		for (let i: number = from; i <= to; i++) {
			fieldDescriptions.push({ key: arr[i][0], value: arr[i][1], title: this.fieldTitle(arr[i][0]) });
		}
		return fieldDescriptions;
	}

	fieldTitle(key: string) {
		switch (key) {
			case 'estatename': return 'Estate Name';
			case 'unit': return 'Unit Number';
			case 'postal': return 'Postal / Zip Code';
			case 'suburb': return 'Suburb';
			case 'region': return 'Region';
			case 'city': return 'City';
			case 'country': return 'Country';
			case 'suite_street': return 'Street';
			case 'propertytype': return 'Type of Property';
			case 'owner': return 'Owner';
			case 'owner_email': return 'e-mail';
			case 'owner_tell': return 'Tell';
			case 'owner_cell': return 'Cell';
			case 'resident': return 'Resident';
			case 'resident_email': return 'e-mail';
			case 'resident_tell': return 'Tell';
			case 'resident_cell': return 'Cell';
			case 'coordinate': return 'GEO Location'
		}
	}
}

/*

// Example entry

0: (2) ["propertyid", 10]
1: (2) ["estateid", 6]
	2: (2) ["estatename", "provident street"]
3: (2) ["addressid", 74]
	4: (2) ["unit", 417]
5: (2) ["suite_street", "Ap #668-4775 Dui Av."]
	6: (2) ["postal", "67528-72229"]
	7: (2) ["suburb", "Avon Lake"]
8: (2) ["city", "Alajuelita"]
	9: (2) ["region", "San José"]
	10: (2) ["country", "Brazil"]
	11: (2) ["coordinate", "-80.99023, -143.47602"]
12: (2) ["propertytypeid", 5]
	13: (2) ["propertytype", "Boundried Duet"]
14: (2) ["ownerid", 3]
	15: (2) ["owner", "Tyrone Bowman"]
	16: (2) ["owner_email", "Praesent.luctus.Curabitur@gravidamauris.ca"]
	17: (2) ["owner_tell", "0845 46 49"]
	18: (2) ["owner_cell", "(795) 743-7657"]
19: (2) ["residentid", 9]
	20: (2) ["resident", "Raymond Macdonald"]
	21: (2) ["resident_email", "Sed.diam.lorem@arcu.ca"]
	22: (2) ["resident_tell", "0800 290 6215"]
	23: (2) ["resident_cell", "(250) 494-9182"]

 */
