import { createDeta } from "./generic";

const { createBase } = createDeta("c0kbpgjf_GM8xD1dUHTAjrQehczGj2Ws59KHWp2yv");

type IHit = {
  key: string;
  u: string;
  r: string;
  t: number;
};
const HitBase = createBase<IHit>("hit");

export type { IHit };
export { HitBase };
