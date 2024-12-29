const Block = require("./block");
const { GENESIS_DATA } = require("./config");

describe("Block", () => {
  const timestamp = "123456";
  const lastHash = "a-lasthash";
  const hash = "a-hash";
  const data = ["blockchain", "data"];

  const block = new Block({
    timestamp: timestamp,
    lastHash: lastHash,
    hash: hash,
    data: data,
  });

  it("has a timestamp, lastHash, hash and data property", () => {
    expect(block.timestamp).toEqual(timestamp);
    expect(block.lastHash).toEqual(lastHash);
    expect(block.hash).toEqual(hash);
    expect(block.data).toEqual(data);
  });

  // create block genesis in to describe Block
  describe("genesis()", () => {
    const genesisblock = Block.genesis();
    // console.log("genesis block:", genesisblock);
    it("returns a block instance", () => {
      expect(genesisblock instanceof Block).toEqual(true);
    });
    it("returns a genesis data", () => {
      expect(genesisblock).toEqual(GENESIS_DATA);
    });
  });

  // Methode main block
  describe("maineBlock()", () => {
    const lastBlock = Block.genesis();
    const data = "maine data";
    const mineBlock = Block.maineBlock({ lastBlock, data });

    it("returns a block instance", () => {
      expect(mineBlock instanceof Block).toEqual(true);
    });
    it("sets the `lastHash` to the `hash` of the lastBlock", () => {
      expect(mineBlock.lastHash).toEqual(lastBlock.hash);
    });
    it("sets the `data`", () => {
      expect(mineBlock.data).toEqual(data);
    });
    it("sets the `timestamp`", () => {
      expect(mineBlock.timestamp).not.toEqual(undefined);
    });
  });
});
