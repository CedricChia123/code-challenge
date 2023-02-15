const { ethers } = require("ethers");

const ADDR = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468"; // your contract address
const ABI = ["function balanceOf(address account) view returns (uint256)"]; // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [
    // token contract addresses
    "0x123d475e13aa54a43a7421d94caa4459da021c77",
    "0x55f6823de9642f47e80ed4845a55aa8430cb4ec6",
];

// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = ethers.providers.getDefaultProvider();

const test = async () => {
    const contract = new Contract(ADDR, ABI, provider);

    const balances = await contract.getBalances(ADDRESS, TOKENS);

    return balances;
};