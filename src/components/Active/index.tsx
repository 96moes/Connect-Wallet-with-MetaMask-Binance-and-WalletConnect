import { useWeb3React } from "@web3-react/core";

function Active (){
    const {active}  = useWeb3React()
    return (
        <div>
            Connection status is: {active?"Active":"NotActive"}
        </div>
    )
}
export default Active;