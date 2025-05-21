import { Router } from 'express';
import {
  listarLocalizacoes,
  criarLocalizacao,
  atualizarLocalizacao,
  deletarLocalizacao,
  buscarLocalizacaoPorId
} from '../controllers/localizacao.controller.js';

const router = Router();

router.get('/', listarLocalizacoes);
router.post('/', criarLocalizacao);
router.get('/:id', buscarLocalizacaoPorId);
router.put('/:id', atualizarLocalizacao);
router.delete('/:id', deletarLocalizacao);

export default router;
