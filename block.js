class Block {
  constructor({ timestamp, lastHash, hash, data }) {
    this.timestamp = timestamp;
    this.lastHash = lastHash;
    this.hash = hash;
    this.data = data;
  }
}

const Block_One = new Block({
  timestamp: "231364",
  lastHash: "a-lastHash",
  hash: "a-has",
  data: "a-data",
});
console.log(Block_One);

// const Block_Two = new Block("654231", "b-lastHash", "b-has", "b-data");
// console.log(Block_Two);
