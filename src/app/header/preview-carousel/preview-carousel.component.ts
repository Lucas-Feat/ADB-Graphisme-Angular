import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
})
export class PreviewCarouselComponent implements OnInit {
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    navSpeed: 700,
    autoplay: true,
    dots: false,
    items: 1,
    nav: false,
  };

  imgs: String[] = [
    'assets/img/caroussel/slide-1.jpg',
    'assets/img/caroussel/slide-2.jpg',
    'assets/img/caroussel/slide-3.jpg',
  ];
  constructor() {}

  ngOnInit(): void {}
}
