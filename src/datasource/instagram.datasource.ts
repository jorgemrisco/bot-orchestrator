import { baseUrl, accessToken, instagramId, facebookId } from "./constants.ts";
import { PostContainerInput } from "./dtos/intagram.dto.ts";
import {
  BasicInfoDto,
  BasicPostResponseDto,
  CreateContainerInput,
} from "./dtos/intagram.dto.ts";

export class InstagramDatasource {
  public async getBasicInfo(): Promise<BasicInfoDto> {
    const url = new URL(`/${facebookId}`, baseUrl);

    url.searchParams.append(
      "fields",
      "id,name,access_token,connected_instagram_account"
    );
    url.searchParams.append("access_token", accessToken);

    const response = await fetch(url, {
      method: "GET",
    });

    return response.json();
  }

  public async createContainer(
    input: CreateContainerInput
  ): Promise<BasicPostResponseDto> {
    const url = new URL(`/${instagramId}`, baseUrl);
    url.pathname += "/media";

    url.searchParams.append("image_url", input.mediaUrl.toString());
    url.searchParams.append("media_type", input.mediaType);
    url.searchParams.append("access_token", accessToken);

    if (input.mediaType === "STORIES" && input.shareToFeed) {
      url.searchParams.append("share_to_feed", String(input.shareToFeed));
    }

    const response = await fetch(url, { method: "POST" });

    return response.json();
  }

  public async postContainer(
    input: PostContainerInput
  ): Promise<BasicPostResponseDto> {
    const url = new URL(`/${instagramId}`, baseUrl);
    url.pathname += "/media_publish";

    url.searchParams.append("creation_id", input.creationId);
    url.searchParams.append("access_token", accessToken);

    const response = await fetch(url, { method: "POST" });

    return response.json();
  }
}
