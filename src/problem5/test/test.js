const { ethers } = require("ethers");

const ADDR = "0x75ca2B1B422319A02BF3F4BFC711CE2Db9341602"; // your contract address
const ABI = [
  {
    "inputs": [
      {
        "internalType": "address",
        "name": "wallet",
        "type": "address"
      },
      {
        "internalType": "address[]",
        "name": "tokenAddresses",
        "type": "address[]"
      }
    ],
    "name": "getBalances",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address",
            "name": "addr",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "balance",
            "type": "uint256"
          }
        ],
        "internalType": "struct Balance.Token[]",
        "name": "",
        "type": "tuple[]"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  }
] // your contract ABI

const ADDRESS = "…"; // some wallet address with token balance
const TOKENS = [    // token contract addresses
	"…",
	"…",
];


// you can use your own RPC provider url (no need to deploy to mainnet)
const provider = new ethers.providers.getDefaultProvider();

const test = async () => {
  const contract = new ethers.Contract(ADDR, ABI, provider);

  console.log(contract)

  const balances = await contract.functions.getBalances(ADDRESS, TOKENS);

  return balances;
};

test().then(console.log)