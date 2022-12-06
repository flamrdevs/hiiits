import type { FastifyInstance } from "fastify";

import HitsRoutes from "./hits";

const RootRoutes = async (fastify: FastifyInstance) => {
  fastify.addHook("preHandler", async (_request, reply) => {
    reply.header("X-Provided-By", "hiiits");
  });

  fastify.get("/", async () => {
    return {
      [`_________name`]: "hiiits",
      [`_______author`]: "flamrdevs",
      [`________thank`]: "you",
    };
  });

  fastify.register(HitsRoutes, { prefix: "/hits" });

  fastify.get("/*", async (_request, reply) => {
    throw reply.notFound("Route Not Found");
  });
};

export default RootRoutes;
