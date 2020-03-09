import { HttpClient } from '@angular/common/http';

class AppHttpService {
	constructor(private _http: HttpClient) {

	}

	get http() {
		return this._http;
	}

	httpGet(url: string) {
		return this._http.get(url);
	}
}
