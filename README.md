NOTES: 
1. This basic project shows how to create an ethereum wallet using an ethereum endpoint from a provider like Infura or Alchemy, by
     a. generating random secret phrases
     b. using one of the randomly generated phrases to create a particular wallet.
     c. funding this wallet with test ethereum
     d. transfering ether from this account to an existing one
     e. generating a private key from this account, and 
     f. importing this account into Metamask and connecting to it through the browser extension (Metamask)
    
2. The wallet object refers to the same account as the signer object.
And so 
 
    wallet.address === signer.address

should be true.