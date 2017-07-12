import { Component, OnInit } from '@angular/core';

import { NavController, LoadingController } from 'ionic-angular';

import { ProductDetailPage } from './product-detail';
import { AppService } from '../../app/app.service'
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html'
})
export class ProductListPage {
  items: any;
  page: number = 1;
  loader: any;
  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public appService: AppService) {}
  ngOnInit(): void {
    let vm = this;
    this.showLoading(function() {
      vm.appService.getProductList(vm.page).then(res => {
        vm.items = res;
        vm.loader.dismiss();
      })
    });
  }
  showLoading(cb) {
    this.loader = this.loadingCtrl.create({
      content: "加载中请稍候..",
      spinner: "bubbles"
    });
    this.loader.present();
    cb && cb();
  }
  doInfinite(infiniteScroll) {
    this.page++;
    this.appService.getProductList(this.page).then(res => {
      this.items = [...this.items, ...res];
      infiniteScroll.complete();
    })
  }
  itemTapped(event, item) {
    this.navCtrl.push(ProductDetailPage, {
      item: item
    });
  }
}
