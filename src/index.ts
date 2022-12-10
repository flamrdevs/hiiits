import fastify from "fastify";

import { config } from "dotenv";

declare global {
  namespace NodeJS {
    export interface ProcessEnv {
      PROJECT_KEY?: string;
    }
  }
}
config();

import { fastifyCorsPlugin, fastifySensiblePlugin } from "~/plugins";

import RootRoutes from "~/routes";

const app = fastify();

app.register(fastifyCorsPlugin);
app.register(fastifySensiblePlugin);
app.register(RootRoutes);

export { app };
