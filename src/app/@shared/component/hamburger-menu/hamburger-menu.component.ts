import {Component, EventEmitter, Output} from '@angular/core';
import {OnDestroyListener} from "@paddls/ngx-common";

@Component({
  selector: 'app-hamburger-menu',
  templateUrl: './hamburger-menu.component.html',
  styleUrls: ['./hamburger-menu.component.scss'],
})
@OnDestroyListener()
export class HamburgerMenuComponent {

  public open: boolean = false;

  @Output()
  public action = new EventEmitter<boolean>();

  public closeOrOpen() {
    this.open = !this.open;
    this.action.emit(this.open)
  }

}
