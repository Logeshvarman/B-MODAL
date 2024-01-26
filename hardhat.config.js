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
const privateKey = "31288194c1851a55a7b4d2c4128ee41d550e5a6b4f7022e6466c4df725706e12";
module.exports = {
  solidity: "0.8.4",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 1337,
    },
    harmonytestnet: {
      url: `https://api.s0.b.hmny.io`,
      accounts: [privateKey]
    },
    mumbai: {
      url: "https://polygon-mumbai.g.alchemy.com/v2/PRRrt-YNzgeCHXmVBPelOrLli1yQFd2c",
      chainId: 80001,
      accounts: [privateKey],
    },
  },
};
