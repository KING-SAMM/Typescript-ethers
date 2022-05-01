import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);


export const connectMetamask = async () => 
{
    const addressDiv = document.querySelector<HTMLDivElement>('#address')!
    const h2 = document.querySelector<HTMLH2Element>('.addressHead')!
    await provider.send("eth_requestAccounts", [])

    const signer = await provider.getSigner();

    const address = await signer.getAddress();

    console.log(signer);

    addressDiv.innerHTML = address;
    // connectedSpan.innerHTML = 'connected';
    
}

export const getContract = () => 
{
  console.log("This is the contract");
  const contract = document.querySelector<HTMLDivElement>('#contract')!
  contract.innerHTML = `This is the contract`
}



