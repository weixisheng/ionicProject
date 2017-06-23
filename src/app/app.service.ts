import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
	private headers = new Headers({'Content-type':'application/json'});
	private detailUrl = 'https://gateway-test.infinitus.com.cn/api/product/products/health/test/detail?paperCode=JKCSPFCS';

	constructor(private http:Http){}

	getDetail():Promise<any> {
		return this.http.get(this.detailUrl)
		.toPromise().then(response => response.json().returnObject).catch(this.handleError);
	}
	private handleError(error:any):Promise<any>{
		console.error('错误--',error);
		return Promise.reject(error.message || error);
	}
}