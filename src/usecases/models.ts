export interface BasicInfo {
  name: string;
  facebookId: string;
  instagramId: string;
  accessToken: string;
}

export type PostContentInput = CreateContainerInput;

export interface CreateContainerInput {
  mediaType: "STORIES" | "REELS" | "CAROUSEL" | null;
  caption?: string;
  shareToFeed?: boolean; // for reels only
  mediaUrl: URL;
}

export interface PostContainerInput {
  creationId: string;
}
