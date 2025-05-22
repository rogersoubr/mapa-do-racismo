import { Router } from 'express';
import {
  listarLocalizacoes,
  criarLocalizacao,
  atualizarLocalizacao,
  deletarLocalizacao,
  buscarLocalizacaoPorId,
  buscarLocalizacoesPorTipo
} from '../controllers/localizacao.controller.js';

const router = Router();

// Listar todas as localizações
router.get('/', listarLocalizacoes);

// Criar uma nova localização
router.post('/', criarLocalizacao);

// Buscar localizações por tipo de racismo
router.get('/tipo/:tipoRacismoId', buscarLocalizacoesPorTipo);

// Buscar uma localização específica por ID
router.get('/:id', buscarLocalizacaoPorId);

// Atualizar uma localização existente
router.put('/:id', atualizarLocalizacao);

// Deletar uma localização
router.delete('/:id', deletarLocalizacao);

export default router;
