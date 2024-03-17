import { mkLucidWallet, WalletAPI } from "@marlowe.io/wallet";
import { mkRuntimeLifecycle } from "@marlowe.io/runtime-lifecycle";
import { Lucid, Blockfrost, C } from "lucid-cardano";
import { readConfig } from "./config.js";
import { datetoTimeout, When } from "@marlowe.io/language-core-v1";
import {
  addressBech32,
  contractId,
  ContractId,
  stakeAddressBech32,
  StakeAddressBech32,
  TxId,
} from "@marlowe.io/runtime-core";
import { ContractBundleMap, lovelace, close } from "@marlowe.io/marlowe-object";
import { input, select } from "@inquirer/prompts";
import {
  RuntimeLifecycle,
  ApplicableAction,
  CanDeposit,
  CanAdvance,
} from "@marlowe.io/runtime-lifecycle/api";
import arg from "arg";
import * as t from "io-ts/lib/index.js";
import { mkSourceMap, SourceMap } from "./experimental-features/source-map.js";
import { POSIXTime, posixTimeToIso8601 } from "@marlowe.io/adapter/time";
import { SingleInputTx } from "@marlowe.io/language-core-v1/semantics";
import * as ObjG from "@marlowe.io/marlowe-object/guards";
import {
  TemplateParametersOf,
  mkMarloweTemplate,
} from "@marlowe.io/marlowe-template";

console.log(readConfig);


