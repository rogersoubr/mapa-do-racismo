import express from 'express';
import  UsuarioController from '../controllers/usuario.controller.js';
import  { authenticateToken, requireAdmin } from '../middlewares/authenticate.middlewares.js';

const usuarioRoutes = express.Router();



// Middleware de autenticação para todas as rotas
usuarioRoutes.use(authenticateToken);//se ta logado
usuarioRoutes.use(requireAdmin);//se e admim

/**
 * @swagger
 * components:
 *   schemas:
 *     Usuario:
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
 * /usuario/usuarios:
 *   get:
 *     summary: Retorna todos os usuários
 *     tags: [Usuario]
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
usuarioRoutes.get('/usuarios', UsuarioController.listarUsuarios); // Obter perfil do usuário logado

/**
 * @swagger
 * /usuario/status:
 *   get:
 *     summary: Retorna as estatísticas de usuários
 *     tags: [Usuario]
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

usuarioRoutes.get('/status', UsuarioController.statusRegra); // rota para ler as estatísticas dos usuários

/**
 * @swagger
 * /usuario/deletar/{id}:
 *   delete:
 *     summary: Remove um outro usuário
 *     tags: [Usuario]
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
usuarioRoutes.delete('/deletar/:id', UsuarioController.deletarUsuario); // Deletar por id

export default usuarioRoutes;