const hre = require("hardhat");

async function main() {
  const Token = await hre.ethers.getContractFactory("ArcToken");

  const token = await Token.deploy(
    "Arc Hub Token",
    "ARC",
    1000000
  );

  await token.deployed();

  console.log("Token deployed:");
  console.log(token.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });