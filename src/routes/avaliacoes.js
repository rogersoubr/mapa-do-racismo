import { Router } from 'express';
import {
  listarAvaliacoes,
  criarAvaliacao,
  atualizarAvaliacao,
  deletarAvaliacao
} from '../controllers/avaliacoes.controller.js';

const router = Router();

router.get('/', listarAvaliacoes);
router.post('/', criarAvaliacao);
router.put('/:id', atualizarAvaliacao);
router.delete('/:id', deletarAvaliacao);

export default router;
