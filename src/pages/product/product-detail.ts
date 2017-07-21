import { Component } from '@angular/core';

import { NavController, ToastController, ActionSheetController, NavParams } from 'ionic-angular';


@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html'
})
export class ProductDetailPage {
  selectedItem: any;
  collectStatus: string = 'star-outline';

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public actionCtrl: ActionSheetController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');
  }
  toggleCollect(): void {
    this.collectStatus = this.collectStatus == 'star' ? 'star-outline' : 'star';
    const message = this.collectStatus == 'star' ? '已收藏' : '取消收藏';
    this.showMessage(message);
  }
  showMessage(message) {
    const toast = this.toastCtrl.create({
      message,
      duration: 2000,
      position: 'middle'
    })
    toast.present();
  }
  share() {
    const actionSheet = this.actionCtrl.create({
      title: '分享到',
      buttons: [{
          text: 'Twitter',
          icon: 'logo-twitter'
        },
        {
          text: 'GitHub',
          icon: 'logo-github'
        },
        {
          text: '取消',
          role: 'cancel'
        }
      ]
    })
    actionSheet.present();
  }
}
