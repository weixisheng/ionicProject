import { Component, OnInit } from '@angular/core';
import { AppService } from '../../app/app.service'

@Component({
  selector: 'page-health-result',
  templateUrl: 'health-result.html'
})

export class HealthResultPage implements OnInit {
  testResult: string;
  wetList: any = [];
  dryList: any = [];
  type: string = 'wet'
  constructor(private appService: AppService) {
    const results = ['干性肌肤', '油性肌肤', '中性肌肤', '混合性肌肤'];
    this.testResult = results[Math.floor(Math.random() * results.length)];

  }
  ngOnInit(): void {
    this.appService.getRecommend().then(res => {
      this.wetList = res.slice(0, 8)
      this.dryList = res.slice(8)
    });
  }
}
