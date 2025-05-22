import express from 'express';
import tipoRacismoController from '../controllers/tipoRacismoController.js';

const router = express.Router();

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
 *           type: integer
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
router.get('/', tipoRacismoController.index);

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
router.get('/:id', tipoRacismoController.show);

/**
 * @swagger
 * /tipos-racismo:
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
router.post('/', tipoRacismoController.store);

/**
 * @swagger
 * /tipos-racismo/{id}:
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
router.put('/:id', tipoRacismoController.update);

/**
 * @swagger
 * /tipos-racismo/{id}:
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
router.delete('/:id', tipoRacismoController.delete);

export default router;