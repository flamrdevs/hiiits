import { createDeta } from "./generic";

const { createBase } = createDeta(process.env.PROJECT_KEY);

type IHit = {
  key: string;
  u: string;
  r: string;
  t: number;
};
const HitBase = createBase<IHit>("hit");

export type { IHit };
export { HitBase };
