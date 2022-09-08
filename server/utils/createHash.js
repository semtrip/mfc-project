// https://medium.com/@ItsCuzzo/using-merkle-trees-for-nft-whitelists-523b58ada3f9
//
// 1. Import libraries. Use `npm` package manager to install
import { MerkleTree } from 'merkletreejs'
import keccak256 from 'keccak256'

import Adress from '../models/adress.js'

export const createHash = async (claimingAddress) => {
    let whitelistAddresses = []
    let dataDd = await Adress.find()
    dataDd.forEach((item)=>{
        whitelistAddresses.push(item.key)
    })
    const leafNodes = whitelistAddresses.map(addr => keccak256(addr));
    const merkleTree = new MerkleTree(leafNodes, keccak256, { sortPairs: true});
    const hexProof = merkleTree.getHexProof(keccak256(claimingAddress));
    const merkleRoot = merkleTree.getHexRoot();
    return hexProof
}