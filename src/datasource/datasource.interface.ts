import {
  BasicInfo,
  CreateContainerInput,
  PostContainerInput,
} from "../usecases/models.ts";
import { BasicPostResponseDto } from "./dtos/intagram.dto.ts";

export interface Datasource {
  getBasicInfo(): Promise<BasicInfo>;
  createContainer(input: CreateContainerInput): Promise<BasicPostResponseDto>;
  postContainer(input: PostContainerInput): Promise<BasicPostResponseDto>;
}
