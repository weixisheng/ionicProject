import {Injectable} from '@angular/core';
import {Headers,Http} from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
	private headers = new Headers({'Content-type':'application/json'});
	private baseUrl = 'https://gateway-test.infinitus.com.cn/api/product/products/health/test'
	private detailUrl = this.baseUrl+'/detail?paperCode=JKCSPFCS';
	// private detailUrl = '../assets/detail.json';
	private recommendUrl1 = this.baseUrl+ '/recommend?poProcessCode=G001&usedCode=JKCSPFCS_B_W&usedType=HEALTH_TEST'
	private recommendUrl2 = this.baseUrl+'/recommend?poProcessCode=G001&usedCode=JKCSPFCS_B_D&usedType=HEALTH_TEST'
	private recommendUrl = '../assets/recommend.json';
	constructor(private http:Http){}

	getDetail():Promise<any> {
		return this.http.get(this.detailUrl)
		.toPromise().then(response => response.json().returnObject).catch(this.handleError);
		// return this.http.get(this.detailUrl).toPromise().then(res => res.json().data).catch(this.handleError)
	}
	getRecommend():Promise<any>{
		let p1 = this.http.get(this.recommendUrl1).toPromise()
		let p2 = this.http.get(this.recommendUrl2).toPromise()
		return Promise.all([p1,p2]).then((res)=>{
			const r1 = res[0].json().returnObject
			const r2 = res[1].json().returnObject
			return r1.concat(r2);
		}).catch(this.handleError);
		// return this.http.get(this.recommendUrl).toPromise().then(res => res.json().data).catch(this.handleError);
	}
	private handleError(error:any):Promise<any>{
		console.error('错误--',error);
		return Promise.reject(error.message || error);
	}
}