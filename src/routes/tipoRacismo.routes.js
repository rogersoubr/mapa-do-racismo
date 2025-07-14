import express from 'express';
import tipoRacismoController from '../controllers/tipoRacismo.controller.js';

const tipoRacismoRoutes = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     TipoRacismo:
 *       type: object
 *       required:
 *         - descricao
 *       properties:
 *         id:
 *           type: string
 *           description: ID único do tipo de racismo
 *         descricao:
 *           type: string
 *           description: Descrição do tipo de racismo
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
 * /tipos-racismo:
 *   get:
 *     summary: Retorna todos os tipos de racismo
 *     tags: [Tipos de Racismo]
 *     responses:
 *       200:
 *         description: Lista de tipos de racismo
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/TipoRacismo'
 */
tipoRacismoRoutes.get('/', tipoRacismoController.index);

/**
 * @swagger
 * /tipos-racismo/{id}:
 *   get:
 *     summary: Retorna um tipo de racismo pelo ID
 *     tags: [Tipos de Racismo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do tipo de racismo
 *     responses:
 *       200:
 *         description: Detalhes do tipo de racismo
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoRacismo'
 *       404:
 *         description: Tipo de racismo não encontrado
 */
tipoRacismoRoutes.get('/:id', tipoRacismoController.show);

/**
 * @swagger
 * /tipos-racismo/criar:
 *   post:
 *     summary: Cria um novo tipo de racismo
 *     tags: [Tipos de Racismo]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - descricao
 *             properties:
 *               descricao:
 *                 type: string
 *     responses:
 *       201:
 *         description: Tipo de racismo criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoRacismo'
 *       400:
 *         description: Dados inválidos
 */
tipoRacismoRoutes.post('/criar', tipoRacismoController.store);

/**
 * @swagger
 * /tipos-racismo/atualizar/{id}:
 *   put:
 *     summary: Atualiza um tipo de racismo
 *     tags: [Tipos de Racismo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do tipo de racismo
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               descricao:
 *                 type: string
 *     responses:
 *       200:
 *         description: Tipo de racismo atualizado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/TipoRacismo'
 *       404:
 *         description: Tipo de racismo não encontrado
 */
tipoRacismoRoutes.put('/atualizar/:id', tipoRacismoController.update);

/**
 * @swagger
 * /tipos-racismo/deletar/{id}:
 *   delete:
 *     summary: Remove um tipo de racismo
 *     tags: [Tipos de Racismo]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: ID do tipo de racismo
 *     responses:
 *       204:
 *         description: Tipo de racismo removido
 *       404:
 *         description: Tipo de racismo não encontrado
 */
tipoRacismoRoutes.delete('/deletar/:id', tipoRacismoController.delete);

export default tipoRacismoRoutes;