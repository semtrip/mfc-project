import { Router } from "express";

import { checkAdress } from "../controllers/check.js";


const router = new Router()

// Get hash
router.post('/', checkAdress)

export default router