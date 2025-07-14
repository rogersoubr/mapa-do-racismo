import express from 'express';
import  AdminController from '../controllers/admin.controller.js';
import  { authenticateToken, requireAdmin } from '../middlewares/authenticate.middlewares.js';

const adminRoutes = express.Router();



// Middleware de autenticação para todas as rotas
adminRoutes.use(authenticateToken);//se ta logado
adminRoutes.use(requireAdmin);//se e admim

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       required:
 *         - email
 *         - regra
 *       properties:
 *         id:
 *           type: string
 *           description: ID único do usuário
 *         email:
 *           type: string
 *           description: Email único do usuário
 *         senha:
 *           type: string
 *           description: Senha do usuário
 *         regra:
 *           type: enum
 *           description: Regra do papel do usuário
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
 * /admin/usuarios:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Lista todos os usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/TipoRacismo'
 */

// Rotas de usuário
//tem que criar o swagger aqui meus amores
adminRoutes.get('/usuarios', AdminController.listarUsuarios); // Obter perfil do usuário logado

/**
 * @swagger
 * /admin/status:
 *   get:
 *     summary: Retorna as estatísticas de usuários
 *     tags: [Admin]
 *     responses:
 *       200:
 *         description: Lista estatísticas dos usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/TipoRacismo'
 */

adminRoutes.get('/status', AdminController.statusRegra); // rota para ler as estatísticas dos usuários

/**
 * @swagger
 * /admin/deletar/{id}:
 *   delete:
 *     summary: Remove um outro usuário
 *     tags: [Admin]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do usuário
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso!
 *       400:
 *         description: Não é possível deletar a sí mesmo. Procure ajuda!
 *       500:
 *         description: Erro interno do servidor
 */
adminRoutes.delete('/deletar/:id', AdminController.deletarUsuario); // Deletar por id

export default adminRoutes;