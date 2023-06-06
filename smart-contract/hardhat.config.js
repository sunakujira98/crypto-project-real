require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    sepolia: {
      url: 'https://twilight-few-bridge.ethereum-sepolia.discover.quiknode.pro/8d6ebea243fdec8f038ce9a31fbfd805f3cff7cc/',
      accounts: ['58f434e9e674f30106ceddeb8842140597babb5754fd0c8973755a9c1aacc02d']
    }
  }
};
