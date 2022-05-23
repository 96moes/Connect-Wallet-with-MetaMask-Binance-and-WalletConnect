import { InjectedConnector } from "@web3-react/injected-connector";
import { BscConnector } from '@binance-chain/bsc-connector';
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";

const meataMaskConnector = new InjectedConnector({supportedChainIds:[1,3,4,5,42]});
const binanceConnector = new BscConnector({supportedChainIds: [56, 97]});
const walletConnectConnector = new WalletConnectConnector({
    rpc: {1: "https://mainnet.infura.io/v3/5456affd27ee47f4b501725a3ad2d7c0"},
    bridge: "https://bridge.walletconnect.org",
    qrcode: true,
});
export {meataMaskConnector, binanceConnector, walletConnectConnector};