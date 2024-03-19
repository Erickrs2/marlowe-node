import * as t from "io-ts/lib/index.js";
import { configJson } from './configJson.js';

const lucidNetworkGuard = t.union([
  t.literal("Mainnet"),
  t.literal("Preview"),
  t.literal("Preprod"),
  t.literal("Custom"),
]);

const configGuard = t.type({
  blockfrostProjectId: t.string,
  blockfrostUrl: t.string,
  network: lucidNetworkGuard,
  seedPhrase: t.string,
  runtimeURL: t.string,
});

export type Config = t.TypeOf<typeof configGuard>;

export async function readConfig(): Promise<Config> {  
  const result = configGuard.decode(configJson);
  if (result._tag === "Left") {
    throw new Error("Invalid config.json");
  }
  return result.right;
}


