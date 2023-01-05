import { createGetIronSession, createSealData, createUnsealData } from "./core";

const getCrypto = (): Crypto => {
  if (typeof globalThis.crypto?.subtle === "object") return globalThis.crypto;
  throw new Error(
    "no native implementation of WebCrypto is available in current context",
  );
};

const _crypto = getCrypto();

export * from "./core";
export const unsealData = createUnsealData(_crypto);
export const sealData = createSealData(_crypto);
export const getIronSession = createGetIronSession(
  _crypto,
  unsealData,
  sealData,
);
