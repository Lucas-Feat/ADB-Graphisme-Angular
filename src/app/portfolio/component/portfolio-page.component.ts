import {Component} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Observable} from "rxjs";
import {Project} from "@core/model/project.model";
import {paramExtractor} from "@core/operator/param-extractor.operator";
import {ProjectService} from "@core/service/project.service";
import {switchMap} from "rxjs/operators";
import {softCache} from "@paddls/rxjs-common";

@Component({
  selector: 'app-portfolio-page',
  templateUrl: './portfolio-page.component.html',
  styleUrls: ['./portfolio-page.component.scss'],
})
export class PortfolioPageComponent {

  public readonly projectId$: Observable<string>;
  public readonly project$: Observable<Project>

  constructor(private route: ActivatedRoute,
              private projectService: ProjectService) {
    this.projectId$ = this.route.params.pipe(
      paramExtractor('id')
    );

    this.project$ = this.projectId$.pipe(
      switchMap((projectId: string) => this.projectService.findById(projectId)),
      softCache()
    );
  }
}
