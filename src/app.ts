import './style.css'
import { connectMetamask, getContract } from './methods.ts';


const app = document.querySelector<HTMLDivElement>('#app')!

app.innerHTML = `
  <h2>Contract</h2>
  <div id="contract"></div>
  <button id="button">getContract</button>

  <h2 class="addressHead">Address</h2>
  <div id="address"></div>
  <button id="connect">connectMetamask</button>
`


const button = document.querySelector<HTMLButtonElement>('#button')!
button.addEventListener('click', getContract);

const connect = document.querySelector<HTMLButtonElement>('#connect')!
connect.addEventListener('click', connectMetamask);