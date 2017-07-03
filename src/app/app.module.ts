import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }    from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { HealthTestPage } from '../pages/health-test/health-test';
import {HealthResultPage} from '../pages/health-test/health-result'
import { ProductDetailPage } from '../pages/product/product-detail';
import { ProductListPage } from '../pages/product/product-list';

import {AppService} from './app.service';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HealthTestPage,
    HealthResultPage,
    ProductDetailPage,
    ProductListPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp,{
      backButtonText:"返回",
      iconMode:"ios"
    }),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HealthTestPage,
    HealthResultPage,
    ProductDetailPage,
    ProductListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AppService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
