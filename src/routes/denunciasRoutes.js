import express from 'express';
import { createDenuncia, getDenuncias, getDenunciaById, updateDenuncia, deleteDenuncia } from '../controllers/denunciasController.js';

const router = express.Router();

router.post('/denuncia', createDenuncia);
router.get('/denuncia', getDenuncias);
router.get('/denuncia/:id', getDenunciaById);
router.put('/denuncia/:id', updateDenuncia);
router.delete('/denuncia/:id', deleteDenuncia);

export default router;