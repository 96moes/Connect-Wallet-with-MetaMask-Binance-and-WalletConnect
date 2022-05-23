import MetaMaskConnectWallet from "../MetaMaskConnectWallet";
import BinanceConnectWallet from "../BinanceConnectWallet";
import WalletConnecConnectWallet from "../WalletConnectConnectWallet";
import Active from "../Active";
import RemoveWallet from "../RemoveWallet";
import Account from "../Account";
function WalletConnect(){
    return(
        <div>
        <MetaMaskConnectWallet />
        <BinanceConnectWallet />
        <WalletConnecConnectWallet />
        <Account />
        <Active />
        <RemoveWallet />
        </div>
    )
}
export default WalletConnect;