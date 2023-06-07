import { ethers } from "ethers";
import { atomWithStorage } from "jotai/utils";
import adapters from "@/lib/constants/adapters.json";

export type Adapter = {
  name: string;
  key: string;
  logoURI: string;
  protocol: string;
  assets: string[];
  chains: number[];
  initParams?: InitParam[];
  resolver?: string;
};

export type InitParam = {
  name: string;
  type: string;
  requirements?: InitParamRequirement[];
  description?: string;
};

export enum InitParamRequirement {
  "Required",
  "NotAddressZero",
  "NotZero",
}

export interface AdapterConfig {
  id: string;
  data: string;
}

export const useAdapters = () => {
  return adapters as any as Array<Adapter>;
};

// @ts-ignore
export const adapterAtom = atomWithStorage<Adapter>("select.adapter", null);

export const adapterConfigAtom = atomWithStorage<Array<string>>(
  "config.adapter",
  []
);
export const adapterDeploymentAtom = atomWithStorage<AdapterConfig>(
  "deploy.adapter",
  { id: ethers.utils.formatBytes32String(""), data: "0x" }
);