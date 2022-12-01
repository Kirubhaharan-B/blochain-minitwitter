/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const hre = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Token = await ethers.getContractFactory("TwitterContract");
  const token = await Token.deploy();
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
