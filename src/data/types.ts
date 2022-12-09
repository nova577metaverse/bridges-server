import { Chain } from "@defillama/sdk/build/general";

export type BridgeNetwork = {
  id: number;
  displayName: string;
  bridgeDbName: string;
  iconLink: string;
  largeTxThreshold: number;
  url: string;
  token?: string;
  symbol?: string;
  chains: string[];
  chainMapping?: {
    [chain: string]: string;
  }; // used when overwriting adapter key (adapter key is always the chain volume counts for, can be overwritten to query blocks/contracts on a different chain)
  destinationChain?: string; // used to specify the destination chain when contracts on only 1 chain are tracked
  runDaily?: boolean  // used if adapter is to only be run daily instead of hourly (used for some "pegged-token only" chains: Tron, BSC, Cronos, ...)
};
