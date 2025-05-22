import express from 'express';
import {
  listarAvaliacoes,
  criarAvaliacao,
  buscarAvaliacaoPorId,
  atualizarAvaliacao,
  deletarAvaliacao
} from '../controllers/avaliacoes.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Avaliacao:
 *       type: object
 *       required:
 *         - nota
 *         - comentario
 *         - localizacaoId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da avaliação
 *         nota:
 *           type: integer
 *           description: Nota da avaliação (1-5)
 *         comentario:
 *           type: string
 *           description: Comentário da avaliação
 *         localizacaoId:
 *           type: integer
 *           description: ID da localização relacionada
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Data de criação
 *         updatedAt:
 *           type: string
 *           format: date-time
 *           description: Data da última atualização
 */

/**
 * @swagger
 * /avaliacoes:
 *   get:
 *     summary: Retorna todas as avaliações
 *     tags: [Avaliações]
 *     responses:
 *       200:
 *         description: Lista de avaliações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Avaliacao'
 */
router.get('/', listarAvaliacoes);

/**
 * @swagger
 * /avaliacoes:
 *   post:
 *     summary: Cria uma nova avaliação
 *     tags: [Avaliações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - nota
 *               - comentario
 *               - localizacaoId
 *             properties:
 *               nota:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               comentario:
 *                 type: string
 *               localizacaoId:
 *                 type: integer
 *     responses:
 *       201:
 *         description: Avaliação criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 *       400:
 *         description: Dados inválidos
 */
router.post('/', criarAvaliacao);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   get:
 *     summary: Retorna uma avaliação pelo ID
 *     tags: [Avaliações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da avaliação
 *     responses:
 *       200:
 *         description: Detalhes da avaliação
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 *       404:
 *         description: Avaliação não encontrada
 */
router.get('/:id', buscarAvaliacaoPorId);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   put:
 *     summary: Atualiza uma avaliação
 *     tags: [Avaliações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da avaliação
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nota:
 *                 type: integer
 *                 minimum: 1
 *                 maximum: 5
 *               comentario:
 *                 type: string
 *     responses:
 *       200:
 *         description: Avaliação atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Avaliacao'
 *       404:
 *         description: Avaliação não encontrada
 */
router.put('/:id', atualizarAvaliacao);

/**
 * @swagger
 * /avaliacoes/{id}:
 *   delete:
 *     summary: Remove uma avaliação
 *     tags: [Avaliações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da avaliação
 *     responses:
 *       204:
 *         description: Avaliação removida
 *       404:
 *         description: Avaliação não encontrada
 */
router.delete('/:id', deletarAvaliacao);

export default router;
