import { Router } from 'express';
import TipoRacismoController from '../controllers/tipoRacismoController.js';

const router = Router();

// Rotas para Tipos de Racismo
router.get('/tipos-racismo', TipoRacismoController.index);
router.get('/tipos-racismo/:id', TipoRacismoController.show);
router.post('/tipos-racismo', TipoRacismoController.store);
router.put('/tipos-racismo/:id', TipoRacismoController.update);
router.delete('/tipos-racismo/:id', TipoRacismoController.delete);

export default router;
