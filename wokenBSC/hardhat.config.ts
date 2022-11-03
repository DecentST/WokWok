
require("@nomicfoundation/hardhat-toolbox");

const { version } = require("chai");

require("dotenv").config();

require("@nomiclabs/hardhat-etherscan");
require('hardhat-deploy');
//require("@nomiclabs/hardhat-waffle");
require("hardhat-gas-reporter");
require("solidity-coverage");
require('hardhat-contract-sizer');
require('@nomiclabs/hardhat-ethers');

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: {
    compilers: [
      {
        version: "0.5.16",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99
          }
        }
      },
      {
        version: "0.6.12",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99
          }
        }
      },
      {
        version: "0.6.6",
        settings: {
          optimizer: {
            enabled: true,
            runs: 99
          }
        }
      },
 
    ],

  },
  paths: {
    artifacts: './artifacts',
  },
  networks: {
    mainBSC: {
      chainId: 56,
      url: 'https://bsc-dataseed.binance.org/',
      accounts: ['xxxx'],

    },
    testBSC: {
      chainId: 97,
      url: 'https://data-seed-prebsc-1-s1.binance.org:8545/',
      accounts: ['xxxxx'],
    }
  },
  etherscan: {
    apiKey: 'ZTXYPBQPBGITBK9JW7INMGUCU1IBMIV45N'
  },
  namedAccounts: {
    deployer: '0x01AA5762e1A58D9E98D6474222BC31de710C9Fc9',
    dev: '0x01AA5762e1A58D9E98D6474222BC31de710C9Fc9',
    gov: '0x1cdEf66524d19eA9d13616Ac82bDA7D91Ea9E684'
  },
};
