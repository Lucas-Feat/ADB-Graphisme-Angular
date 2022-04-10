import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss'],
})
export class ContactHeaderComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {
    let isMouseHover = false;

    let shownav = () => {
      document.getElementById('header')!.style.transform = 'translateY(0)';
    };
    let hidenav = () => {
      document.getElementById('header')!.style.transform = 'translateY(-200px)';
    };

    document.getElementById('logo')!.addEventListener('mouseover', () => {
      shownav();
    });
    document.getElementById('header')!.addEventListener('mouseleave', () => {
      isMouseHover = false;
      hidenav();
    });

    document.getElementById('header')!.addEventListener('mouseover', () => {
      isMouseHover = true;
    });

    document.getElementById('logo')!.addEventListener('mouseleave', () => {
      if (isMouseHover) {
        hidenav();
      }
    });
  }
}
