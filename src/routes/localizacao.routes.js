import express from 'express';
import localizacaoController from '../controllers/localizacao.controller.js';

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Localizacao:
 *       type: object
 *       required:
 *         - nome
 *         - descricao
 *         - latitude
 *         - longitude
 *         - tipoRacismoId
 *       properties:
 *         id:
 *           type: integer
 *           description: ID único da localização
 *         nome:
 *           type: string
 *           description: Nome do local
 *         descricao:
 *           type: string
 *           description: Descrição da ocorrência
 *         latitude:
 *           type: number
 *           format: float
 *           description: Latitude da localização
 *         longitude:
 *           type: number
 *           format: float
 *           description: Longitude da localização
 *         bairro:
 *           type: string
 *           description: Bairro da localização
 *         rua:
 *           type: string
 *           description: Rua da localização
 *         tipoRacismoId:
 *           type: integer
 *           description: ID do tipo de racismo relacionado
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
 * /localizacoes:
 *   get:
 *     summary: Retorna todas as localizações
 *     tags: [Localizações]
 *     responses:
 *       200:
 *         description: Lista de localizações
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Localizacao'
 */
router.get('/', localizacaoController.listarLocalizacoes);

/**
 * @swagger
 * /localizacoes/criar:
 *   post:
 *     summary: Cria uma nova localização
 *     tags: [Localizações]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Localizacao'
 *     responses:
 *       201:
 *         description: Localização criada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Localizacao'
 *       400:
 *         description: Dados inválidos
 */
router.post('/criar', localizacaoController.criarLocalizacao);

/**
 * @swagger
 * /localizacoes/{id}:
 *   get:
 *     summary: Retorna uma localização pelo ID
 *     tags: [Localizações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da localização
 *     responses:
 *       200:
 *         description: Detalhes da localização
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Localizacao'
 *       404:
 *         description: Localização não encontrada
 */
/**
 * @swagger
 * /localizacoes/tipo/{tipoRacismoId}:
 *   get:
 *     summary: Retorna localizações por tipo de racismo
 *     tags: [Localizações]
 *     parameters:
 *       - in: path
 *         name: tipoRacismoId
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do tipo de racismo
 *     responses:
 *       200:
 *         description: Lista de localizações filtradas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Localizacao'
 */
router.get('/tipo/:tipoRacismoId', localizacaoController.buscarLocalizacaoPorId);

/**
 * @swagger
 * /localizacoes/{id}:
 *   get:
 *     summary: Retorna uma localização pelo ID
 *     tags: [Localizações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da localização
 *     responses:
 *       200:
 *         description: Detalhes da localização
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Localizacao'
 *       404:
 *         description: Localização não encontrada
 */
router.get('/:id', localizacaoController.buscarLocalizacaoPorId);

/**
 * @swagger
 * /localizacoes/atualizar/{id}:
 *   put:
 *     summary: Atualiza uma localização
 *     tags: [Localizações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da localização
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Localizacao'
 *     responses:
 *       200:
 *         description: Localização atualizada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Localizacao'
 *       404:
 *         description: Localização não encontrada
 */
router.put('/atualizar/:id', localizacaoController.atualizarLocalizacao);

/**
 * @swagger
 * /localizacoes/deletar/{id}:
 *   delete:
 *     summary: Remove uma localização
 *     tags: [Localizações]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID da localização
 *     responses:
 *       204:
 *         description: Localização removida
 *       404:
 *         description: Localização não encontrada
 */
router.delete('/deletar/:id', localizacaoController.deletarLocalizacao);

export default router;
