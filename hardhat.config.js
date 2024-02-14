require("@nomiclabs/hardhat-waffle");

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
const privateKey = "464c45108cab706032195be5a693fb6fa637302dcf06dcfd3b38141f62c0797f";
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    tBNB: {
      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,
      chainId:97,
      accounts: [privateKey]
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/PRRrt-YNzgeCHXmVBPelOrLli1yQFd2c",
      chainId: 80001,
      accounts: [privateKey],
    },
  },
};