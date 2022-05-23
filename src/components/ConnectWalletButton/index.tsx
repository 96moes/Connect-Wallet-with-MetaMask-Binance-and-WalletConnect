import { Web3Provider } from "@ethersproject/providers";
import { useWeb3React } from "@web3-react/core";
import {meataMaskConnector, binanceConnector, walletConnectConnector} from "../../connectors/connectors";
interface IConnectWalletButton{
    walletType:"MetaMask"|"Binance"|"WalletConnect"
}

function ConnectWalletButton({walletType}:IConnectWalletButton){
    const { activate } = useWeb3React<Web3Provider>()
    const connectWalletButtonHandler= async (walletType:"MetaMask"|"Binance"|"WalletConnect") => {
        if(walletType==="MetaMask"){
            console.log(1);
            try{
            await activate(meataMaskConnector);
            }
            catch(error){
                console.log("inja error khordim 1",error);
            }
            console.log(11);
        }
        if(walletType==="Binance"){
            console.log(2);
            try{
            await activate(binanceConnector);
            }
            catch(error){
                console.log("inja error khordim 2",error);
            }
            console.log(22);
        }
        if(walletType==="WalletConnect"){
            console.log(3);
            console.log(walletConnectConnector);
            console.log(activate(walletConnectConnector));
            try{
            await activate(walletConnectConnector);
            }
            catch(error){
                console.log("inja error khordim 3",error);
            }
            console.log(33);
        }
    }
    return(
        <button onClick={()=> connectWalletButtonHandler(walletType)}>Connect Wallet By {walletType}</button>
    )
}
export default ConnectWalletButton;