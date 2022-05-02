NOTES: 
1. This basic project shows how to create an ethereum wallet using an ethereum endpoint from a provider like Infura or Alchemy, by
     a. generating random secret phrases
     b. using one of the randomly generated phrases to create a particular wallet.
     c. funding this wallet with test ethereum
     d. transfering ether from this account to an existing one
    
2. The wallet object refers to the same account as the signer onject.
And so 
 
    wallet.address === signer.address

should be true.