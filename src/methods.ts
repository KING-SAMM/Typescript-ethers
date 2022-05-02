import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);
// const provider = new ethers.providers.JsonRpcProvider("api-key");


export const connectMetamask = async () => 
{
    const addressDiv = document.querySelector<HTMLDivElement>('#address')!
    const h2 = document.querySelector<HTMLH2Element>('.addressHead')!
    const status = document.querySelector<HTMLSpanElement>('.status')!

    await provider.send("eth_requestAccounts", [])

    const signer = await provider.getSigner();

    const address = await signer.getAddress();

    console.log("Metamask signer is ", signer);

    addressDiv.innerHTML = address;
    status.style.visibility = 'visible';
    status.innerHTML = 'connected';

    
}

export const getContract = () => 
{
  console.log("This is the contract");
  const contract = document.querySelector<HTMLDivElement>('#contract')!
  contract.innerHTML = `This is the contract`
}



