import { useWeb3React } from "@web3-react/core";
function Account(){
    const{account} = useWeb3React()
    return(
        <div>your account is :{account}</div>
    )
}
export default Account;