# prj-3-erc20HH-
	•	What it is:
This is a minimal ERC-20 token implementation built with OpenZeppelin and Hardhat. The project showcases the basic smart contract structure, token minting logic, and a simple deployment example. It serves as a lightweight starting point for experimenting with token mechanics and learning the Ethereum development workflow.
	•	How to run:
Install dependencies using npm install, then compile the contract with npx hardhat compile and run tests with npx hardhat test.
To deploy locally, start a local Hardhat node using npx hardhat node and execute npx hardhat run scripts/deploy.js.
You can also connect to a public testnet (like Sepolia) and deploy the token there by adding your RPC and private key to the config.
	•	Future plans:
Future improvements include adding EIP-2612 (Permit) support for gasless approvals, implementing a contract verification script for Etherscan, and setting up CI (GitHub Actions) to automatically compile and test the project on every commit.
