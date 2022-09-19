import {Component} from '@angular/core';
import {previewCarrouselOptions} from "@shared/utils/owl-options.utils";

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  public customOptions = previewCarrouselOptions
}
