import './style.css'
import { connectMetamask, getContract } from './methods.ts';
import { mnemonic } from './methods2.ts';


const app = document.querySelector<HTMLDivElement>('#app')!

// Basic UI
app.innerHTML = `
 
  <h2>Contract</h2>
  <div id="contract"></div>
  <button id="button">getContract</button>

  <h2 class="addressHead">Metamask Address</h2>
  <span class="status"></span>
  <div id="address"></div>
  <button id="connect">connectMetamask</button>

  <h2>Created Signer Address</h2>
  <div class="signer-addr"></div>

  <h2>Created Signer Balance</h2>
  <div class="signer-bal"></div>

  <h2>Recipient</h2>
  <div class="recipient"></div>
  
`

// UI Interaction
const button = document.querySelector<HTMLButtonElement>('#button')!
button.addEventListener('click', getContract);

const connect = document.querySelector<HTMLButtonElement>('#connect')!
connect.addEventListener('click', connectMetamask);

// Code to run immediately the page loads
// displaying certain relevant information onscreen
(
  async() => {
    let { signer, recipient, balance } = await mnemonic;
    
    console.log("Signer is", signer);

    const recipientDiv = document.querySelector<HTMLDivElement>('.recipient')!
    recipientDiv.innerHTML = recipient;
    
    const signerAddrDiv = document.querySelector<HTMLDivElement>('.signer-addr')!
    signerAddrDiv.innerHTML = signer.address;

    const signerBalabceDiv = document.querySelector<HTMLDivElement>('.signer-bal')!
    signerBalabceDiv.innerHTML = balance;
 
  }
)();


