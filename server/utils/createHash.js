// https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9
//
// 1. Import libraries. Use `npm` package manager to install
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'

import Adress from '../models/adress.js'



export const createHash = async () => {
    let whitelistAddresses = []
    let dataDd = await Adress.find()
    dataDd.forEach((item)=>{
        whitelistAddresses.push(item.key)
    })
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    const rootHash = merkleTree.getRoot();
    console.log('Whitelist Merkle Tree\n', merkleTree.toString());
    console.log("Root Hash: ", rootHash);
    const claimingAddress = leafNodes[0];
    const hexProof = merkleTree.getHexProof(claimingAddress);
    console.log(hexProof);
    console.log(merkleTree.verify(hexProof, claimingAddress, rootHash));
}