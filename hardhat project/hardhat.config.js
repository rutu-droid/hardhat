require("@nomiclabs/hardhat-waffle");


const { GOERLI_PRIVATE_KEY, ALCHEMY_API_KEY } = process.env;
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
   networks: {
     goerli: {
       url: `https://eth-goerli.g.alchemy.com/v2/dpW_nyhLAFQkEL-bw52s6DBM90P5vOYa`,
       accounts: { mnemonic: `biology raven relief useful silly much lemon midnight goat boring anger project`
       },
    },
   },
};
