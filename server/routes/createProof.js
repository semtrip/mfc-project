import { Router } from "express";

import { createProof } from "../controllers/createProof.js";


const router = new Router()

// Get proof
router.post('/', createProof)

export default router