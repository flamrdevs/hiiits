import type { FastifyInstance } from "fastify";

import { HitBase } from "~/deta";
import type { IHit } from "~/deta";

function sortLatestFn(a: IHit, b: IHit) {
  return a.t < b.t ? 1 : -1;
}

const HitsRoutes = async (fastify: FastifyInstance) => {
  fastify.get("/", async () => {
    const { items } = await HitBase.fetch();
    return items.sort(sortLatestFn);
  });

  fastify.get<{
    Params: { u?: string };
  }>("/:u", async (request, reply) => {
    const { u } = request.params;
    if (typeof u !== "string" || u == null || u == "") throw reply.badRequest("Require u (username)");

    const { items } = await HitBase.fetch({ u });
    return items.sort(sortLatestFn);
  });

  fastify.get<{
    Params: { u?: string; r?: string };
  }>("/:u/:r", async (request, reply) => {
    const { u, r } = request.params;

    if (typeof u !== "string" || u == null || u == "") throw reply.badRequest("Require u (username)");
    if (typeof r !== "string" || r == null || r == "") throw reply.badRequest("Require r (repository)");

    const { items } = await HitBase.fetch({ u, r });
    return items.sort(sortLatestFn);
  });
};

export default HitsRoutes;
