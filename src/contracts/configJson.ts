import 'dotenv/config'

export const configJson = {
    // We use blockfrost for the lucid wallet, you can create a projectId here
    // https://blockfrost.io/
    blockfrostProjectId: process.env.BLOCKFROST_API!,
    blockfrostUrl: "https://cardano-preprod.blockfrost.io/api/v0",
    network: "Preprod",
    // You can create this seed phrase from any wallet. Do not reuse a real wallet phrase
    // for a test example.
    seedPhrase: process.env.SEEDPHRASE!,
    runtimeURL: process.env.RUNTIME!,
  }