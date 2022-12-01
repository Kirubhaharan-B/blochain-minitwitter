# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a script that deploys that contract.

Before Getting to execute the scripts

## Prerequisites

1. Alchemy Account
2. Metamask wallet 

## Create your Own .env File

Create a .env file and add your Alchemy URL and Metamask Private Key

```shell
    Enter this in your .env file
    ALCHEMY_URL = "Enter your Alchemy URL"       
    WALLET_PRIVATE_KEY = "Enter your Wallet Private Key"
```

Try running some of the following tasks:

## To Compile the Contract 

Type this Command to Compile the Contract 

```shell
npx hardhat compile
```
## To Deploy the Contract

Type this command to Deploy the Contract

```shell
npx hardhat run scripts/delpoy.js --network goerli
```

Now your Contract is Deployed. 

## To check your Contract Deployments

Step 1: 
    Copy the Token address in terminal after you deployed it
Step 2: 
    Visit the Etherscan Goerli testnet and paste the Token address in there

- Now you can see the status of the contract in the website 
- whenever you do any operations you can see the operations there in the website


## To add goerli to your account for the transcations

- Visit goerli faucet and paste your wallet id, It will provide 0.2 goerli test ethers for your transcations.
- Now, You can use it to execute your contracts

## The code runs fine, If suppose any thing happens try:

- npx hardhat --show-stack-traces clean

## Now Read the Read.me file in frontend to execute the frontend of twitter




