

/**
 * Http Request model
 */
import { HttpHeaders, HttpParams } from '@angular/common/http';

export class GetRequestModel {
	public headers: HttpHeaders;
	public url: string;
	public params: HttpParams;
	constructor(
		public initOne: string,
		public initTwo: string
	) {
		this.headers = new HttpHeaders();
		this.params = new HttpParams();
		this.headers = this.headers.append('Content-Type', 'application/json;charset=utf8');
		this.params = this.params.append(initOne, initTwo);
		this.url = '/api';
	}
	setMoreHeaders(paramOne: string, paramTwo: string): void {
		this.headers = this.headers.append(paramOne, paramTwo);
	}
}

export class PostRequest {
	constructor(
		public url: string,
		public headers: string,
		public body: any[]
	) { }
}
