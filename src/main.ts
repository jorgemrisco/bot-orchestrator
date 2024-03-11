import { GetBasicInfo } from "./usecases/get-basic-info.ts";
import { InstagramDatasource } from "./datasource/instagram.datasource.ts";
import { PostContent } from "./usecases/post-content.usecase.ts";
import { CreateContainerInput } from "./usecases/models.ts";

//You can specify an object with a port and hostname option, which is the address to listen on. The default is port 8000 on hostname "127.0.0.1".
Deno.serve(async (request: Request) => {
  const datasource = new InstagramDatasource();

  if (request.method === "GET") {
    const usecase = new GetBasicInfo(datasource).execute();

    return new Response(JSON.stringify(await usecase, null, 2));
  }

  if (request.method === "POST") {
    const body: CreateContainerInput = JSON.parse(await request.text());
    const usecase = new PostContent(datasource);
    const response = await usecase.execute(body);

    return new Response(JSON.stringify(response, null, 2));
  }

  return new Response('Invalid method. Try using "GET" or "POST"');
});
