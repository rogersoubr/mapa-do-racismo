// Importando o pacote 'express' para criar as rotas
import express from 'express';
//danado que tem os cruds de auth
import AuthController from '../controllers/auth.controller.js';

import  { authenticateToken } from '../middlewares/authenticate.middlewares.js';

const authRoutes = express.Router();
// deixei aqui um modelo, para quem for criar o swagger, boa sorte bjs

/**
 * @swagger
 * components:
 *   schemas:
 *     Auth:
 *       type: object
 *       required:
 *         - nota
 *         - comentario
 *         - localizacaoId
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
 *         papel:
 *           type: enum
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
 * /auth/criar:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *               - regra
 *             properties:
 *               id:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               regra:
 *                 type: string
 *               createdAt:
 *                 type: string
 *               updatedAt:
 *                 type: string
 * 
 *     responses:
 *       201:
 *         description: Usuário criado, usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *         description: Email e senha devem ser colocados! 
 */

//POPST -> CRIAR USUARIO -> auth/criar
authRoutes.post("/criar", AuthController.criar);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Faz login em um usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - senha
 *             properties:
 *               id:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 * 
 *     responses:
 *       201:
 *         description: Logado com sucesso, usuario
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *         description: Email e senha devem ser colocados! 
 */

//POPST ->  LOGIN -> auth/login
authRoutes.post("/login",AuthController.login);

/**
 * @swagger
 * /auth/eu:
 *   get:
 *     summary: Retorna o usuario logado do token
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Dados do usuario
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               items:
 *                 $ref: '#/components/schemas/Auth'
 */

//GET ->    BUSCAR -> auth/eu
authRoutes.get("/eu",authenticateToken ,AuthController.eu);

/**
 * @swagger
 * /auth/logouth:
 *   post:
 *     summary: Faz logout em um usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - authToken 
 *             properties:
 *               id:
 *                 type: string
 *               email:
 *                 type: string
 *               senha:
 *                 type: string
 *               regra:
 *                 type: string
 * 
 *     responses:
 *       200:
 *         description: Logout realizado!
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 */

//POPST ->  LOGOUT -> auth/lkogout
authRoutes.post("/logout",AuthController.logout);

export default authRoutes;


