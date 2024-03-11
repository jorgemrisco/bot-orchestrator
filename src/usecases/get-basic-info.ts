import { Datasource } from "../datasource/datasource.interface.ts";
import { BasicInfo } from "./models.ts";

export class GetBasicInfo {
  constructor(private datasource: Datasource) {}

  public execute(): Promise<BasicInfo> {
    return this.datasource.getBasicInfo();
  }
}
