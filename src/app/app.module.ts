import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Router, Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { HomeComponent } from './home/home.component';

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
  declarations: [AppComponent, ProductPageComponent, HomeComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
