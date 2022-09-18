import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-scroll-to-top',
  templateUrl: './scroll-to-top.component.html',
  styleUrls: ['./scroll-to-top.component.scss'],
})
export class ScrollToTopComponent implements OnInit {
  constructor() {
  }

  ngOnInit(): void {

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

      if (scrollValue > 10) {
        scrollProgress!.style.opacity = '1';
        scrollWhite!.style.opacity = '1';
        scrollImg!.style.opacity = '1';
        document.getElementById('scrollToTop')!.style.cursor = 'pointer';
      } else {
        scrollProgress!.style.opacity = '0';
        scrollWhite!.style.opacity = '0';
        scrollImg!.style.opacity = '0';
        document.getElementById('scrollToTop')!.style.cursor = 'default';
      }
    };
    window.onscroll = scrollPercentage;
  }

  public scrollToTop() {
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth'
    })
  }
}
