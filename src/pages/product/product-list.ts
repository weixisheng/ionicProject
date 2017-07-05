import { Component,OnInit } from '@angular/core';

import { NavController } from 'ionic-angular';

import { ProductDetailPage } from './product-detail';
import {AppService} from '../../app/app.service'
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {
  items: any;
  page:number=1;
  constructor(public navCtrl: NavController, public appService: AppService) {}
  ngOnInit():void {
    this.appService.getProductList(this.page).then(res=>{
      this.items=res
    });
  }
  doInfinite(infiniteScroll){
    this.page++;
    this.appService.getProductList(this.page).then(res=>{
      this.items = [...this.items,...res];
      infiniteScroll.complete();
    })
  }
  itemTapped(event, item) {
    this.navCtrl.push(ProductDetailPage, {
      item: item
    });
  }
}
