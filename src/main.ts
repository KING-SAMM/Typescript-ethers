import './style.css'
import { connectMetamask } from './ethers.ts';

const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h2>Contract</h2>
  <div id="contract"></div>
  <button id="button">getContract</button>

  <h2>Address</h2>
  <span class="connected"></span>
  <div id="address"></div>
  <button id="connect">connectMetamask</button>
`

const getContract = () => 
{
  console.log("This is the contract");
  const contract = document.querySelector<HTMLDivElement>('#contract')!
  contract.innerHTML = `This is the contract`
}


const button = document.querySelector<HTMLButtonElement>('#button')!
button.addEventListener('click', getContract);

const connect = document.querySelector<HTMLButtonElement>('#connect')!
connect.addEventListener('click', connectMetamask);
