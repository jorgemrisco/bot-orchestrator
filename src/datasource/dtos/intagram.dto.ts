export interface BasicInfoDto {
  id: string;
  name: string;
  access_token: string;
  connected_instagram_account: { id: string };
}

export interface BasicPostResponseDto {
  id: string;
}
