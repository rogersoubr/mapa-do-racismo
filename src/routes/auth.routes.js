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
 * components:
 *   schemas:
 *     CriarUsuario:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           example: usuario@exemplo.com
 *         senha:
 *           type: string
 *           example: senhaSegura123
 *         papel:
 *           type: string
 *           example: USER
 *
 *     AuthResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Usuário criado
 *         usuario:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             email:
 *               type: string
 *             papel:
 *               type: string
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *
 * /auth/criar:
 *   post:
 *     summary: Cria um novo usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/CriarUsuario'
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/AuthResponse'
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
 * components:
 *   schemas:
 *     LoginUsuario:
 *       type: object
 *       required:
 *         - email
 *         - senha
 *       properties:
 *         email:
 *           type: string
 *           example: usuario@exemplo.com
 *         senha:
 *           type: string
 *           example: senha123segura
 * 
 *     LoginResponse:
 *       type: object
 *       properties:
 *         message:
 *           type: string
 *           example: Logado com sucesso
 *         usuario:
 *           type: object
 *           properties:
 *             id:
 *               type: string
 *             email:
 *               type: string
 *             papel:
 *               type: string
 *         token:
 *           type: string
 *           example: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
 *
 * /auth/login:
 *   post:
 *     summary: Faz login de um usuário
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LoginUsuario'
 *     responses:
 *       201:
 *         description: Logado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LoginResponse'
 *       400:
 *         description: Email e senha devem ser colocados!
 *       500:
 *         description: Erro interno do servidor
 */


//GET ->    BUSCAR -> auth/eu
authRoutes.get("/eu",authenticateToken ,AuthController.eu);


//POPST ->  LOGOUT -> auth/lkogout
authRoutes.post("/logout",AuthController.logout);
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



export default authRoutes;


