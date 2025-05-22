import { Router } from 'express';
import {
  listarAvaliacoes,
  criarAvaliacao,
  buscarAvaliacaoPorId,
  atualizarAvaliacao,
  deletarAvaliacao
} from '../controllers/avaliacoes.js';

const router = Router();

// Listar todas as avaliações
router.get('/', listarAvaliacoes);

// Criar uma nova avaliação
router.post('/', criarAvaliacao);

// Buscar uma avaliação específica por ID
router.get('/:id', buscarAvaliacaoPorId);

// Atualizar uma avaliação existente
router.put('/:id', atualizarAvaliacao);

// Deletar uma avaliação
router.delete('/:id', deletarAvaliacao);

export default router;
