// Importando o pacote 'express' para criar as rotas
import express, { Router } from 'express';
//danado que tem os cruds de auth
import AuthController from '../controllers/auth.controller';

const auth = Router();
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
 *         description: user{}
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Auth'
 *       400:
 *         description: Email e senha devem ser colocados! 
 */

//POPST -> CRIAR USUARIO -> auth/criar
auth.post("/criar", AuthController.criar);

//POPST ->  LOGIN -> auth/login
auth.post("/login",AuthController.login);

//GET ->    BUSCAR -> auth/eu
auth.post("/eu",AuthController.eu);

//POPST ->  LOGOUT -> auth/lkogout
auth.post("/logout",AuthController.logout);


