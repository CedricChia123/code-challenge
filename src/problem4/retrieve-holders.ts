import { ethers } from "ethers";

//Define the appplication binary interface(JSON representation of the function)
const abi = ["function balanceOf(address account) external view returns (uint256)"];

const token_address = "0xc0ecb8499d8da2771abcbf4091db7f65158f1468";

const provider = new ethers.providers.JsonRpcProvider("https://bsc-dataseed.binance.org/");

const contract = new ethers.Contract(token_address, abi, provider);

const address = ["0xb5d4f343412dc8efb6ff599d790074d0f1e8d430",
    "0x0020c5222a24e4a96b720c06b803fb8d34adc0af",
    "0xd1d8b2aae2ebb2acf013b803bc3c24ca1303a392"]

async function retrieveHolders() {
    address.forEach((addr) => {
        contract.balanceOf(addr)
          .then((balance: string) => {
            console.log(addr + ' ' + balance);
          })
          .catch((error: any) => {
            console.error(error);
          });
      });               
}

retrieveHolders();