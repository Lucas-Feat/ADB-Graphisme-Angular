import {FirestoreRepository, FirestoreResource} from "@paddls/ngx-firestore-repository";
import {Column, Id, SubCollection} from "@paddls/ngx-repository";
import {FileUpload} from "@core/model/file-to-upload.model";
import {Observable} from "rxjs";
import {Portfolio} from "@core/model/portfolio.model";
import {PortfolioQuery} from "@core/query/portfolio.query";

@FirestoreResource({
  path: '/projects'
})
export class Project {

  @Id()
  public id: string;

  @Column()
  public name: string;

  @Column()
  public year: string;

  @Column()
  public description: string;

  @Column()
  public link: string;

  @Column(() => FileUpload)
  public slider: FileUpload;

  @Column(() => FileUpload)
  public banner: FileUpload;

  @SubCollection({
    resourceType: () => Portfolio,
    params: (project: Project) => new PortfolioQuery({projectId: project.id}),
    repository: () => FirestoreRepository
  })
  public portfolio$: Observable<Portfolio[]>;

  public constructor(data: Partial<Project> = {}) {
    Object.assign(this, data);
  }

}
