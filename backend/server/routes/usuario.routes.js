import { Router } from "express";
import {prueba, registrar,confirmar} from '../controller/UserController.js';
const router = Router();

router.get('/User/prueba', prueba);
router.post('/User/', registrar);
router.get('/User/confirmar/:token', confirmar);

export default router;