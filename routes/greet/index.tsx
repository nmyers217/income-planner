import { Handler, PageProps } from "$fresh/server.ts";

export const handler: Handler = async (req, ctx) => {
  const { origin } = new URL(req.url);

  const session = await fetch(`${origin}/auth/session`, {
    headers: {
      cookie: req.headers.get("cookie") || "",
    },
  }).then((res) => res.json());

  if (!session?.user) {
    return Response.redirect(`${origin}/auth/signin?redirect=${req.url}`);
  }

  return ctx.render({ user: session.user });
};

export default function Greet(props: PageProps) {
  return <div>Hello {props.data.user.email}</div>;
}
