import { ethers } from 'ethers';
import { RPC_PROVIDER_ENDPOINT, ACCOUNT_MNEMONIC, RECIPIENT_ADDRESS } from '../utils/constants.js';


export const mnemonic = ( async () => {
  const connection = new ethers.providers.JsonRpcProvider(RPC_PROVIDER_ENDPOINT);
  const gasPrice = await connection.getGasPrice();
  const wallet = ethers.Wallet.fromMnemonic(ACCOUNT_MNEMONIC);
  const phrase = await wallet.mnemonic.phrase; // Never reveal secret phrase
  const signer = wallet.connect(connection);
  const recipient = RECIPIENT_ADDRESS;
  const balance = await connection.getBalance(wallet.address);
  console.log("balance is ", balance);
  console.log(wallet.mnemonic.phrase)
  console.log("Wallet address is: ", wallet.address);
  console.log("PRIVATE KEY is ", wallet.privateKey);



  // Configure the 'send' transaction object
  const tx = {
      from: wallet.address,
      to: recipient,
      value: ethers.utils.parseUnits("0.1", "ether"),
      gasPrice: gasPrice,
      nonce: connection.getTransactionCount(wallet.address, "latest"),
      gasLimit: ethers.utils.hexlify(1000000)
  }

  // Send the transaction
  const transaction = await signer.sendTransaction(tx);
  console.log(transaction);

  return { signer, recipient, balance };

  
})();

