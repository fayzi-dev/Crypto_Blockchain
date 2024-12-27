const Block = require("./block");

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
});
