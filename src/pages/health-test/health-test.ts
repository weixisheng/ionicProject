import { Component,OnInit } from '@angular/core';
import {AppService} from '../../app/app.service'
import { AlertController,NavController } from 'ionic-angular';
import {HealthResultPage} from './health-result'
@Component({
  selector: 'page-health-test',
  templateUrl: 'health-test.html'
})
export class HealthTestPage implements OnInit{
	detail:any={};
	page:number=0;
	len:number=0;

  constructor(private appService:AppService,private alertCtrl: AlertController,private navCtrl:NavController) {}
  ngOnInit():void{
  		this.appService.getDetail().then(res => {
  			this.detail=res;
  			this.len = this.detail.paperItems.length;
  		});
  	}
  	startTest(){
  		this.page = 1;
  	}
  	prev(){
  		this.page--;
  	}
  	next(){
  		if(document.querySelectorAll(".item-radio-checked").length<this.page){
  			this.showAlert();
  			return;
  		}
  		this.page++;
  	}
  	submit(){
  		if(document.querySelectorAll(".item-radio-checked").length<this.page){
  			this.showAlert();
  			return;
  		}
  		this.navCtrl.push(HealthResultPage);
  		
  	}
  	showAlert(){
  		let alert = this.alertCtrl.create({
      		title: '请选择答案!',
      		message: '选择答案之后再继续~',
      		buttons: ['哦']
    	});
    	alert.present()
  	}
}
