import { Deta } from "deta";

import uniqid from "uniqid";

function createDeta(projectKey?: string, authToken?: string) {
  const deta = Deta(projectKey, authToken);

  return {
    deta,
    createBase<T extends { key: string }>(baseName: string, host?: string) {
      const base = deta.Base(baseName, host);

      return {
        async delete(key: string) {
          return (await base.delete(key)) as null;
        },
        async fetch(query?: { [key: string]: any } & { [K in keyof Omit<T, "key">]?: Omit<T, "key">[K] }) {
          return (await base.fetch(query as any)) as { items: T[]; count: number; last?: string };
        },
        async get(key: string) {
          return (await base.get(key)) as T | null;
        },
        async put(data: Omit<T, "key">) {
          return (await base.put(data as any, uniqid())) as T | null;
        },
        async update(data: Omit<T, "key">) {
          return (await base.update(data as any, uniqid())) as null;
        },
      };
    },
  };
}

export { createDeta };
