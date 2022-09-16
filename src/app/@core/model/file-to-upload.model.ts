import {Column} from "@paddls/ngx-repository";

export class FileUpload {

  @Column()
  public name: string;

  @Column()
  public url: string;

  @Column()
  public path: string;

  public file: File;

  public constructor(data: Partial<FileUpload> = {}) {
    Object.assign(this, data);
  }
}
