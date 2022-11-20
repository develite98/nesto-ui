import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';
import { ProductDetail2Component } from './product-detail2/product-detail2.component';
import { AboutComponent } from './about/about.component';
import { PartnershipComponent } from './partnership/partnership.component';
import { CareerComponent } from './career/career.component';
import { FaqComponent } from './faq/faq.component';
import { BlosComponent } from './blos/blos.component';

export const routes: Route[] = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'product',
    component: ProductPageComponent,
  },
  {
    path: 'product-detail',
    component: ProductDetailPageComponent,
  },
  {
    path: 'product-detail2',
    component: ProductDetail2Component,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'faq',
    component: FaqComponent,
  },
  {
    path: 'career',
    component: CareerComponent,
  },
  {
    path: 'blogs',
    component: BlosComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    ProductPageComponent,
    HomeComponent,
    ProductDetailPageComponent,
    ProductDetail2Component,
    AboutComponent,
    PartnershipComponent,
    CareerComponent,
    FaqComponent,
    BlosComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
