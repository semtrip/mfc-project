import { createHash } from '../utils/createHash.js'

export const createProof = async (req, res) => {
    try {
        const {adress} = req.body
        const proof = await createHash(adress)
        if(proof) {
            return res.json({proof})
        } else {
            return res.json({message: 'error create proof'})
        }
    } catch (error) {
        return res.json({message: 'error create proof'})
    }    
}