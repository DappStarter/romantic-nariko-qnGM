require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include kiwi flame table educate ranch remember slow include ensure swift gas'; 
let testAccounts = [
"0xe813fd02a003aa37f5808f452a56a1d434a5ac5e31b48b6496b24dbb126fbae5",
"0xabf826813dbcc3e5d2a69ca2e0f35221666c2d01382d5f24f47ab09d5516866e",
"0xf3b2d6d1939ec19dfd4e0383268fbe4e8177ef7185fb32fb0e9b3c116d988750",
"0x0e9063e311fa403731cd33688f6036acfded6ec2119caf82ae33baad1e37d0c8",
"0x64eff4be30cce7ac258068c9521277da357dda869ca21ab96913654f9a0dce0a",
"0x3d7f005dd5c43dfe64511b0d16136d1a4aee91ca4efc5b5f1802f5b183519386",
"0x89d4d6974c9d51a73f280d2388d2934491d1185f32d499004f3541ea13b38921",
"0x39f96246f1b222a61b58efdff76e1de71e1cd20b3f13f24735da0572f4f990b1",
"0xf797fbdc39654c320ab528c47a81b145ab3b2f6999ca9ac2733a542973275b60",
"0x8cfe9c16fe307d8736c0801ab5a1e943039d03830e6d12c4c3e35031a8503ac2"
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


