import './App.css';
import { Web3ReactProvider } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';
import WalletConnect from './components/WalletConnect';
function getLibrary(provider:any, connector:any){
  return new Web3Provider(provider);
}
function App() {
  return (
    <div className="App">
      <Web3ReactProvider getLibrary={getLibrary}>
        <WalletConnect />
      </Web3ReactProvider>
    </div>
  );
}

export default App;
