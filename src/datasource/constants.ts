import { load } from "https://deno.land/std@0.219.0/dotenv/mod.ts";

const env = await load();

export const baseUrl = new URL(`/{env["API_VERSION"]}`, env["BASE_URL"]);

export const accessToken = env["ACCESS_TOKEN"];

export const instagramId = env["INSTAGRAM_ID"];

export const facebookId = env["FACEBOOK_ID"];
