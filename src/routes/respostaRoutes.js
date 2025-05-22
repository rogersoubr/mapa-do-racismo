import { Router } from 'express';
import {
  listarRespostas,
  criarResposta,
  atualizarResposta,
  deletarResposta,
  buscarRespostaPorId,
  listarRespostasPorLocalizacao
} from '../controllers/resposta.controller.js';

const router = Router();

// Listar todas as respostas
router.get('/', listarRespostas);

// Criar uma nova resposta
router.post('/', criarResposta);

// Listar respostas por localização
router.get('/localizacao/:localizacaoId', listarRespostasPorLocalizacao);

// Buscar uma resposta específica por ID
router.get('/:id', buscarRespostaPorId);

// Atualizar uma resposta existente
router.put('/:id', atualizarResposta);

// Deletar uma resposta
router.delete('/:id', deletarResposta);

export default router;
