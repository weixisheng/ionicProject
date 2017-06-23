import { Component,OnInit } from '@angular/core';
import {AppService} from '../../app/app.service'
@Component({
  selector: 'page-health-test',
  templateUrl: 'health-test.html'
})
export class HealthTestPage implements OnInit{
	detail:any={};
	toggle:boolean=false;

  constructor(private appService:AppService) {}
  ngOnInit():void{
  		this.appService.getDetail().then(res => {
  			this.detail=res;
  		});
  	}
  	startTest(){
  		this.toggle = true;
  	}
}
