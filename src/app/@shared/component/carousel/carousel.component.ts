import {Component} from '@angular/core';
import {AppService} from "@core/service/app.service";
import {Observable} from "rxjs";
import {Project} from "@core/model/project.model";
import {OnDestroyListener, takeUntilDestroy} from "@paddls/ngx-common";

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})
@OnDestroyListener()
export class CarouselComponent {
  public readonly projects$: Observable<Project[]>;
  public selectedIndex: number = 0;

  public constructor(private readonly appService: AppService) {
    this.projects$ = this.appService.getProjects();

    this.projects$.pipe(
      takeUntilDestroy(this)
    ).subscribe((projects: Project[]) => {
      setInterval(() => {
        this.selectedIndex = (this.selectedIndex === projects.length - 1) ? 0 : ++this.selectedIndex;
      }, 5000)
    })
  }

}
