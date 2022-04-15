require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note night solar gesture photo flush gate'; 
let testAccounts = [
"0xba648a869e95d4d0f3c42700a10694773c2074917c65ebdabdf9e32c70385bd5",
"0x637d23afe42921cb9d36345fc30de58bb1a96387e0767b9fa12527ee892c9e8e",
"0x73ff0844e3a55699d8e76eaf274fa292ec0b136a02b6afadd598a3a331fd2344",
"0x7d45eb2b90b988ee94440a8e318d6d38fbe80e5f4bb4c9564fc593b618cc7708",
"0x9a8551ab1ca915ed6ae5e3646307e4cfd04568518d68862733a8fdae661f6628",
"0x39dfa442e784bb6d8c1bff5e4a4b4e384db37c9b32244bc770888b43f2cb7f04",
"0x6ecaf00c7bfe875e0ecbb46c57f659e0f8e94c632aa20c5019bfe81073e0a167",
"0x409beb55334bf7e2de00a84dcee5161dbc9717ef268bdc5912559231bc2387ce",
"0x10d609a9ecdfc67f8f6451204e1ad6e6785fcf4d8df56132ff70d95aa5f14d68",
"0x4df2660cb445dff69202e440deebf1f5c0a96df992464831fc0072ab24adfc8b"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


