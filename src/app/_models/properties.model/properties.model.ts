/**
 * Data models
 */

export class Property {
	constructor(
		public propertyid: number,
		public titledeedno: string,
		public owner: Contact,
		public estate: Estate,
		public address: Address,
		public resident: Contact,
		public propertytype: PropertyType,
		public created: Date
	){ }
}

export class ContactType {
	constructor(
		public contacttypeid: number,
		public contacttype: string
	){ }
}

export class Contact {
	constructor(
		public contactid: number,
		public contacttype: ContactType,
		public firstname : string,
		public lastname: string,
		public domicile: number,
		public email: string,
		public tell: string,
		public cell: string,
		public created: Date
	){ }
}

export class Address {
	constructor(
		public 	addressid: number,
		public 	unit: number,
		public 	suite_street: string,
		public 	postal:	string,
		public 	suburb:	string,
		public 	city: string,
		public 	region:	string,
		public 	country: string,
		public 	coordinate:	string,
		public 	created: Date
	){ }
}

export class Estate {
	constructor(
		public estateid: number,
		public estatename: string,
	){ }
}


export class PropertyType {
	constructor(
		public propertytypeid: number,
		public propertytype: string
	) { }
}

export class PropertyMemo{
	constructor(
		public propertymemoid: number,
		public propertyid: number,
		public memo: string,
		public created: Date
	){ }
}
