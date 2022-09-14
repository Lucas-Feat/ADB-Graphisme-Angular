import {Column, Id, PathColumn} from "@paddls/ngx-repository";
import {FirestoreResource} from "@paddls/ngx-firestore-repository";

@FirestoreResource({
  path: '/projects/:projectId/portfolio'
})
export class Portfolio {

  @Id()
  public id: string;

  @PathColumn()
  public projectId: string;

  @Column()
  public name: void | string;

  @Column()
  public url: string;

  @Column()
  public path: string;

  public file: File;

  public constructor(data: Partial<Portfolio> = {}) {
    Object.assign(this, data);
  }
}
