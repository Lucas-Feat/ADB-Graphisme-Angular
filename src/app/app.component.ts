import {Component} from '@angular/core';
import {OnDestroyListener} from "@paddls/ngx-common";

@Component({
  selector: 'app-root',
  template: '<router-outlet></router-outlet>'
})
@OnDestroyListener()
export class AppComponent {
}
