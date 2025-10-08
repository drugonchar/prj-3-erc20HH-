const { expect } = require("chai");

describe("MyToken", function () {
  it("mints initial supply to deployer", async function () {
    const [owner] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("MyToken");
    const token = await Token.deploy(ethers.parseUnits("1000", 18));
    const balance = await token.balanceOf(owner.address);
    expect(balance).to.equal(ethers.parseUnits("1000", 18));
  });
});
