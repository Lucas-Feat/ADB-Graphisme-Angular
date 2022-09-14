import {Component} from '@angular/core';
import {Title} from '@angular/platform-browser';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss'],
})
export class ContactPageComponent {

  constructor(private title: Title) {
    this.title.setTitle('ADBGraphisme - Contact');
  }
  
}
