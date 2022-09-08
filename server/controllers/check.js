import Adress from '../models/adress.js'

import { createHash } from '../utils/createHash.js'

export const checkAdress = async (req, res) => {
    try {
        const {adress} = req.body
        const isKey = await Adress.findOne({key:adress})
        console.log('adress: ', adress)
        console.log('isKey: ', isKey)
        if(isKey) {
            // createHash()
            console.log(`Такой адрес есть`)
            return res.json({isWallet: true})
        } else {
            console.log(`Такого адреса нет`)
            return res.json({isWallet: false})
        }
    } catch (error) {
        console.log(`Ошибка при проверке ключа`)
        return res.json({isWallet: false, message: 'Ошибка при проверке ключа'})
    }    
}