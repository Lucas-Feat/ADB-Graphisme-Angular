import {Component} from '@angular/core';

@Component({
  selector: 'app-contact-header',
  templateUrl: './contact-header.component.html',
  styleUrls: ['./contact-header.component.scss'],
})
export class ContactHeaderComponent {

  public open: boolean = false;

  constructor() {
  }

  public closeOrOpen(event: boolean) {
    this.open = event;
  }

}
