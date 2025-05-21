import { Router } from 'express';
import tipoRacismoController from '../controllers/tipoRacismoController.js';

const router = Router();

router.get('/', tipoRacismoController.index);
router.get('/:id', tipoRacismoController.show);
router.post('/', tipoRacismoController.store);
router.put('/:id', tipoRacismoController.update);
router.delete('/:id', tipoRacismoController.delete);

export default router;