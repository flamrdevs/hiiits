import type { FastifyInstance } from "fastify";

import { HitBase } from "~/deta";

const line = `<svg width="100%" height="10" xmlns="http://www.w3.org/2000/svg"><g><line stroke-linecap="undefined" stroke-width="2" stroke-linejoin="undefined" id="svg_3" y2="5" x2="100%" y1="5" x1="0" stroke="#777" fill="none"/></g></svg>`;

const HitsRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", async () => {
    const data = await HitBase.fetch();
    return data.items;
  });

  fastify.get<{
    Params: { u?: string };
  }>("/:u", async (request, reply) => {
    const { u } = request.params;
    if (typeof u !== "string" || u == null || u == "") throw reply.badRequest("Require u");

    const data = await HitBase.fetch({ u });
    return data.items;
  });

  fastify.get<{
    Params: { u?: string; r?: string };
  }>("/:u/:r", async (request, reply) => {
    const { u, r } = request.params;

    if (typeof u !== "string" || u == null || u == "") throw reply.badRequest("Require u");
    if (typeof r !== "string" || r == null || r == "") throw reply.badRequest("Require r");

    await HitBase.put({ u, r, t: Date.now() });

    reply.header("Content-Type", "image/svg+xml");
    reply.header("Age", "0");
    reply.header("Cache-Control", "max-age=0, no-cache, no-store, must-revalidate");
    return line;
  });
};

export default HitsRoutes;
