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

  constructor(public navCtrl: NavController, public appService: AppService) {}
  ngOnInit():void {
    this.appService.getProductList().then(res=>{
      this.items=res
    });
  }
  itemTapped(event, item) {
    this.navCtrl.push(ProductDetailPage, {
      item: item
    });
  }
}
