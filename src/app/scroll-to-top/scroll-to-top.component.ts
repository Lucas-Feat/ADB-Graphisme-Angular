import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    document.getElementById('scrollToTop')!.addEventListener('click', () => {
      document.documentElement.scrollIntoView({
        block: 'start',
        behavior: 'smooth',
        inline: 'start',
      });
    });
    document.getElementById('scrollToTop')!.style.cursor = 'pointer';

    let scrollPercentage = () => {
      let scrollProgress = document.getElementById('scrollToTop');
      let scrollWhite = document.getElementById('scrollProgress');
      let scrollImg = document.getElementById('scrollImg');
      let pos = document.documentElement.scrollTop;
      let calcHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      let scrollValue = Math.round((pos * 100) / calcHeight);

      scrollProgress!.style.background = `conic-gradient(#e93119 ${scrollValue}%,rgba(0,0,0,0) ${scrollValue}%)`;

      // if (scrollValue > 10) {
      //   scrollImg!.style.opacity = '1';
      // } else {
      //   scrollImg!.style.opacity = '0';
      // }

      // if (scrollValue > 10) {
      //   scrollProgress!.style.opacity = '1';
      //   scrollWhite!.style.opacity = '1';
      // } else {
      //   scrollProgress!.style.opacity = '0';
      //   scrollWhite!.style.opacity = '0';
      // }
    };
    window.onscroll = scrollPercentage;
  }
}
