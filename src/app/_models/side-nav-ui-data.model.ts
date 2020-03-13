/**
 * Side navigation data in static class
 */

export class SideNavOption {
	constructor(
		public tableName: string,
		public caption: string,
		public icon: string,
		public routerlink: string
	) { }
}

export class SideNavStaticView {
	static sideNavListArray: SideNavOption[] = [
		new SideNavOption('property','Properties', 'star', 'properties-list'),
		new SideNavOption('contact_type','Contacts', 'assignment_ind', 'contacts-list'),
		new SideNavOption('contact','Addresses', 'contact_mail', 'address-list'),
		new SideNavOption('estate','Estates', 'star', 'estate-list'),
		new SideNavOption('property_type','Property Types', 'store', 'property-type-list')
	];
}
