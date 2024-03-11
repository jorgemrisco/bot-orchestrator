import { baseUrl, accessToken, instagramId, facebookId } from "./constants.ts";
import { BasicInfoDto, BasicPostResponseDto } from "./dtos/intagram.dto.ts";
import { Datasource } from "./datasource.interface.ts";
import {
  BasicInfo,
  CreateContainerInput,
  PostContainerInput,
} from "../usecases/models.ts";

export class InstagramDatasource implements Datasource {
  public async getBasicInfo(): Promise<BasicInfo> {
    const url = new URL(`/${facebookId}`, baseUrl);

    url.searchParams.append(
      "fields",
      "id,name,access_token,connected_instagram_account"
    );
    url.searchParams.append("access_token", accessToken);

    const response: BasicInfoDto = await (
      await fetch(url, {
        method: "GET",
      })
    ).json();

    return {
      accessToken: response.access_token,
      facebookId: response.id,
      instagramId: response.connected_instagram_account.id,
      name: response.name,
    };
  }

  public async createContainer(
    input: CreateContainerInput
  ): Promise<BasicPostResponseDto> {
    const url = new URL(`/${instagramId}`, baseUrl);
    url.pathname += "/media";

    url.searchParams.append("image_url", input.mediaUrl.toString());
    url.searchParams.append("media_type", input.mediaType);

    url.searchParams.append("access_token", accessToken);

    const response = await fetch(url, { method: "POST" });

    return response.json();
  }

  public async postContainer(
    input: PostContainerInput
  ): Promise<BasicPostResponseDto> {
    const url = new URL(`/${instagramId}`, baseUrl);
    url.pathname += "/media_publish";

    url.searchParams.append("creation_id", input.creationId.toString());
    url.searchParams.append("access_token", accessToken);

    const response = await fetch(url, { method: "POST" });

    return response.json();
  }
}
