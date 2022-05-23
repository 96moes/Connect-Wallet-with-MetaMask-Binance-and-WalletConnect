import { useWeb3React } from "@web3-react/core";
function RemoveWallet(){
    const{ deactivate } = useWeb3React();
    return(
        <div>
            <button onClick={deactivate}>Remove Wallet</button>
        </div>
    )
}
export default RemoveWallet;