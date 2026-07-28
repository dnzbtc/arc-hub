const hre = require("hardhat");

async function main() {
  const NFT = await hre.ethers.getContractFactory("ArcNFT");

  const nft = await NFT.deploy(
    "Arc Hub NFT",
    "AHNFT"
  );

  await nft.deployed();

  console.log("NFT deployed:");
  console.log(nft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
