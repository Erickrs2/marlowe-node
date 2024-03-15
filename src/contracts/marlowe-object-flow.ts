import { Lucid, Blockfrost, C } from "lucid-cardano";
import { datetoTimeout, When } from "@marlowe.io/language-core-v1";
import {
  addressBech32,
  contractId,
  ContractId,
  stakeAddressBech32,
  StakeAddressBech32,
  TxId,
} from "@marlowe.io/runtime-core";
import { mkLucidWallet, WalletAPI } from "@marlowe.io/wallet";
import { mkRuntimeLifecycle } from "@marlowe.io/runtime-lifecycle";
import { ContractBundleMap, lovelace, close } from "@marlowe.io/marlowe-object";
import {
  RuntimeLifecycle,
  ApplicableAction,
  CanDeposit,
  CanAdvance,
} from "@marlowe.io/runtime-lifecycle/api";
import { POSIXTime, posixTimeToIso8601 } from "@marlowe.io/adapter/time";
import { SingleInputTx } from "@marlowe.io/language-core-v1/semantics";
import * as ObjG from "@marlowe.io/marlowe-object/guards";
import {
  TemplateParametersOf,
  mkMarloweTemplate,
} from "@marlowe.io/marlowe-template";
import { mkSourceMap, SourceMap } from "./experimental-features/source-map.js";

console.log("HOLA MARLOWE222");
