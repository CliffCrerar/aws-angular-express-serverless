/**
 * Data models
 */


interface FieldDescription {
	key: string;
	value: string | number;
	title: string;
}


export class PropertyEntry {
	private _panelstate: boolean;
	private _keyValueArray: [string, any][];
	constructor(
		public propertyid?: number,
		public estateid?: number,
		public estatename?: string,
		public addressid?: number,
		public unit?: number,
		public suite_street?: string,
		public postal?: string,
		public suburb?: string,
		public city?: string,
		public region?: string,
		public country?: string,
		public coordinate?: string,
		public propertytypeid?: number,
		public propertytype?: string,
		public ownerid?: number,
		public owner?: string,
		public owner_email?: string,
		public owner_tell?: string,
		public owner_cell?: string,
		public residentid?: number,
		public resident?: string,
		public resident_email?: string,
		public resident_tell?: string,
		public resident_cell?: string,
	) {
		this._keyValueArray = Object.entries(this);
		this._panelstate = false;
	}

	get panelstate(): boolean { return this._panelstate; }

	set panelstate(state: boolean) { this._panelstate = state; }

	get estate() { return this._fieldDescription(this._keyValueArray, 2); }

	get address() { return this._fieldDescription(this._keyValueArray, 4, 11); }

	get propertyType() { return this._fieldDescription(this._keyValueArray, 13); }

	get propertyOwner() { return this._fieldDescription(this._keyValueArray, 15, 18); }

	get propertyResident() { return this._fieldDescription(this._keyValueArray, 20, 23); }s;

	protected _fieldDescription(arr: [string, any][], from: number, to: number = from): FieldDescription[] {
		const fieldDescriptions = new Array<FieldDescription>();
		for (let i: number = from; i <= to; i++) {
			fieldDescriptions.push({ key: arr[i][0], value: arr[i][1], title: this._fieldTitle(arr[i][0]) });
		}
		return fieldDescriptions;
	}

	protected _fieldTitle(key: string) {
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
			case 'coordinate': return 'GEO Location';
		}
	}
	/*
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
}

export class PropertyListing {
	constructor(
		public propertyid: number,
		public titledeedno: string,
		public owner: Contact,
		public estate: Estate,
		public address: Address,
		public resident: Contact,
		public propertytype: PropertyType,
		public created: Date
	) { }
}

export class ContactType {
	constructor(
		public contacttypeid: number,
		public contacttype: string
	) { }
}

export class Contact {
	constructor(
		public contactid: number,
		public contacttype: ContactType,
		public firstname: string,
		public lastname: string,
		public domicile: number,
		public email: string,
		public tell: string,
		public cell: string,
		public created: Date
	) { }
}

export class Address {
	constructor(
		public addressid: number,
		public unit: number,
		public suite_street: string,
		public postal: string,
		public suburb: string,
		public city: string,
		public region: string,
		public country: string,
		public coordinate: string,
		public created: Date
	) { }
}

export class Estate {
	constructor(
		public estateid: number,
		public estatename: string,
	) { }
}


export class PropertyType {
	constructor(
		public propertytypeid: number,
		public propertytype: string
	) { }
}

export class PropertyMemo {
	constructor(
		public propertymemoid: number,
		public propertyid: number,
		public memo: string,
		public created: Date
	) { }
}

export class PostgreSQLFieldDescription {
	constructor(
		public name?: string,
		public tableID?: number,
		public columnID?: number,
		public dataTypeID?: number,
		public dataTypeModifier?: number,
		public format?: string
	) { }
}
