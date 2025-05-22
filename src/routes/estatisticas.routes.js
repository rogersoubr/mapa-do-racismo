import express from 'express';
import { obterEstatisticas } from '../controllers/estatistica.controller.js';

const router = express.Router();

router.get('/estatisticas', obterEstatisticas);

export default router;
