import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Project} from "@core/model/project.model";
import {ProjectService} from "@core/service/project.service";
import {softCache} from "@paddls/rxjs-common";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private readonly projects$: Observable<Project[]>;

  public constructor(private readonly projectService: ProjectService) {
    this.projects$ = this.projectService.findAll().pipe(
      softCache()
    )
  }

  public getProjects(): Observable<Project[]> {
    return this.projects$;
  }
}
