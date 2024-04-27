import { FreshContext } from "$fresh/server.ts";
import { Auth } from "@auth/core";
import { authConfig } from "../../auth.config.ts";

export const handler = async (
  req: Request,
  _ctx: FreshContext,
): Promise<Response> => {
  return await Auth(req, authConfig);
};
