import { ethers } from 'ethers';

const provider = new ethers.providers.Web3Provider(window.ethereum);


export const connectMetamask = async () => 
{
    const addressDiv = document.querySelector<HTMLDivElement>('#address')!
    const connectedSpan = document.querySelector('.connected')!
    await provider.send("eth_requestAccounts", [])

    const signer = await provider.getSigner();

    const address = await signer.getAddress();

    console.log(signer);

    addressDiv.innerHTML = address;
    connectedSpan.style.padding = `5px 10px`;
    connectedSpan.style.backgroundColor = `#008080`;
    connectedSpan.style.color = `#ffffff`;
    connectedSpan.innerHTML = 'connected';
    
}



