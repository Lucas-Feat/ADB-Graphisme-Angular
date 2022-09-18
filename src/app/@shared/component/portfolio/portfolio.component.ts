import {Component, Input} from '@angular/core';
import {OwlOptions} from 'ngx-owl-carousel-o';
import {owlOptionsUtils} from "@shared/utils/owl-options.utils";
import {Observable} from "rxjs";
import {Project} from "@core/model/project.model";
import {AppService} from "@core/service/app.service";
import {OnDestroyListener} from "@paddls/ngx-common";

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss'],
})
@OnDestroyListener()
export class PortfolioComponent {

  @Input() title: String;

  public customOptions: OwlOptions;
  public projects$: Observable<Project[]>;

  constructor(private readonly appService: AppService) {
    this.customOptions = owlOptionsUtils

    this.projects$ = this.appService.getProjects();
  }

}
