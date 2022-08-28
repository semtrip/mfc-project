import Adress from '../models/adress.js'

import { createHash } from '../utils/createHash.js'

export const checkAdress = async (req, res) => {
    try {
        const {adress} = req.body
        const isKey = await Adress.findOne({adress})
    
        if(isKey) {
            console.log(`Такой адрес есть`)
            createHash()
            return res.json({message: 'Такой адрес есть'})
        } else {
            console.log(`Такого адреса нет`)
            return res.json({message: 'Такого адреса нет'})
        }
    } catch (error) {
        console.log(`Ошибка при проверке ключа`)
        return res.json({message: 'Ошибка при проверке ключа'})
    }    
}