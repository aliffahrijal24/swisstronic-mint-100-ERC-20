require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();


// Remember to use the private key of a testing account
// For better security practices, it's recommended to use npm i dotenv for storing secret variables
const {PRIVATE_KEY} = process.env;

module.exports = {
  defaultNetwork: "swisstronik",
  solidity: "0.8.20",
  networks: {
    swisstronik: {
      url: "https://json-rpc.testnet.swisstronik.com/",
      accounts: [`0x` + `${PRIVATE_KEY}`],
    },
  },
};