import { Router } from 'express';
import {
  listarRespostas,
  criarResposta,
  atualizarResposta,
  deletarResposta,
  buscarRespostaPorId
} from '../controllers/resposta.controller.js';

const router = Router();

router.get('/', listarRespostas);
router.post('/', criarResposta);
router.get('/:id', buscarRespostaPorId);
router.put('/:id', atualizarResposta);
router.delete('/:id', deletarResposta);

export default router;
