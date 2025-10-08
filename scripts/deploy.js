const hre = require("hardhat");

async function main() {
  const initial = hre.ethers.parseUnits("1000000", 18); // 1,000,000 MYT
  const Token = await hre.ethers.getContractFactory("MyToken");
  const token = await Token.deploy(initial);
  await token.waitForDeployment();
  console.log("MyToken deployed to:", await token.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
