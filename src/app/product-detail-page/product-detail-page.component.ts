import { Component } from '@angular/core';
declare let Swiper: any;

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss'],
})
export class ProductDetailPageComponent {
  ngAfterViewInit() {
    let swiper = new Swiper('.swiper-container', {
      autoplay: 3000,
      spaceBetween: 30,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
      },
    });
  }
}
