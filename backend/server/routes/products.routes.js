import { Router } from "express";
import { deleteCharacters, getProduct, getCharacters, createCharacters, updateCharacters } from '../controller/Characters.controller.js'
const router = Router();

router.get('/Characters', getCharacters);
router.post('/Characters', createCharacters);
router.put('/Characters/:id', updateCharacters);
router.delete('/Characters/:id', deleteCharacters);

router.get('/Characters/:id', getProduct);

export default router;