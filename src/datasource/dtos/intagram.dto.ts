export interface BasicInfoDto {
  id: string;
  name: string;
  access_token: string;
  connected_instagram_account: { id: string };
}

export interface BasicPostResponseDto {
  id: string;
}

export interface CreateContainerInput {
  mediaType: "STORIES" | "REELS" | "CAROUSEL"; //Required for carousels, stories, and reels.
  caption?: string;
  shareToFeed?: boolean; // for reels only
  mediaUrl: URL;
}

export interface PostContainerInput {
  creationId: string;
}
