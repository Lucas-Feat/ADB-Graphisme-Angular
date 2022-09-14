import {Injectable} from '@angular/core';
import {InjectRepository} from '@paddls/ngx-repository';
import {Observable} from 'rxjs';
import {FirestoreRepository} from "@paddls/ngx-firestore-repository";
import {Project} from "@core/model/project.model";

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  @InjectRepository({repository: () => FirestoreRepository, resourceType: () => Project})
  private readonly projectRepository: FirestoreRepository<Project, string>;

  public findAll(): Observable<Project[]> {
    return this.projectRepository.findAll();
  }

  public findById(id: string): Observable<Project> {
    return this.projectRepository.findById(id);
  }

}
