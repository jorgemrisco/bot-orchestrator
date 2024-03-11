import { Datasource } from "../datasource/datasource.interface.ts";
import { PostContentInput } from "./models.ts";

export class PostContent {
  constructor(private datasource: Datasource) {}

  public async execute(input: PostContentInput) {
    const creationId = (await this.datasource.createContainer(input)).id;

    return this.datasource.postContainer({ creationId });
  }
}
