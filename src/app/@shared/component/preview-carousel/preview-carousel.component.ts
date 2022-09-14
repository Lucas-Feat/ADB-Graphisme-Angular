import {Component} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {AppService} from "@core/service/app.service";
import {Observable} from "rxjs";
import {Project} from "@core/model/project.model";
import {previewCarrouselOptions} from "@shared/utils/owl-options.utils";

@Component({
  selector: 'app-preview-carousel',
  templateUrl: './preview-carousel.component.html',
  styleUrls: ['./preview-carousel.component.scss'],
})
export class PreviewCarouselComponent {
  public readonly customOptions: OwlOptions;
  public readonly projects$: Observable<Project[]>;

  public constructor(private readonly appService: AppService) {
    this.customOptions = previewCarrouselOptions;
    this.projects$ = this.appService.getProjects();
  }

}
