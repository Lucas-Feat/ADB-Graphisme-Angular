import { Component, OnInit } from '@angular/core';
// @ts-ignore
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const tw = document.getElementById('typewriter');
    const writer = new Typewriter(tw, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
    });

    writer
      .changeTypeColor('#E93119')
      .type('GRAPHISTE')
      .rest(1000)
      .remove(9)
      .changeTypeColor('#8DB5AD')
      .type('WEB DESIGNER')
      .rest(1000)
      .remove(12)
      .changeTypeColor('#FFF')
      .type('MOTION DESIGNER')
      .rest(1000)
      .remove(15)
      .start();
  }
}
