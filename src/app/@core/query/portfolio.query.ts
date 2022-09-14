import {PathParam} from "@paddls/ngx-repository";

export class PortfolioQuery {

  @PathParam()
  public projectId: string

  public constructor(data: Partial<PortfolioQuery> = {}) {
    Object.assign(this, data);
  }
}
