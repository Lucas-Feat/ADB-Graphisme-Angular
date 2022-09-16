import {OwlOptions} from "ngx-owl-carousel-o";

export const owlOptionsUtils: OwlOptions = {
  loop: true,
  margin: 50,
  center: true,
  autoHeight: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  navSpeed: 700,
  autoplay: true,
  dots: false,
  responsive: {
    0: {
      items: 1,
    },
    576: {
      items: 2,
    },
    992: {
      items: 3,
    },
  },
  nav: false,
};

export const previewCarrouselOptions: OwlOptions = {
  loop: true,
  autoWidth: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: true,
  navSpeed: 700,
  autoplay: true,
  dots: false,
  items: 1,
  nav: false,
};
