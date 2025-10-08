require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks: {
    // Добавишь RPC, если захочешь деплой в тестнет (Sepolia)
    // sepolia: { url: process.env.SEPOLIA_RPC, accounts: [process.env.PRIVATE_KEY] }
  }
};
