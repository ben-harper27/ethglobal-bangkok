import { Coinbase } from "@coinbase/coinbase-sdk";

const coinbase = Coinbase.configure({
  apiKeyName:
    "organizations/e4159ca2-46eb-40c0-a119-2d89552ab89c/apiKeys/ab02963f-aeba-45d3-be29-120a7562d063",
  privateKey:
    "-----BEGIN EC PRIVATE KEY-----\nMHcCAQEEILHyMkN1tLIg2U5K5NLJepY8ilCEsFdLNBGRHgtJqtCWoAoGCCqGSM49\nAwEHoUQDQgAEnDEpF8+bwQqKPx+u7QrIJ9b5naQeiQbLYAcc2S2rC4qSyV8I3K9q\nLRDM/56poQ2d5/WX/MAlIREzhbf/yrHGJg==\n-----END EC PRIVATE KEY-----\n",
});

export default coinbase;