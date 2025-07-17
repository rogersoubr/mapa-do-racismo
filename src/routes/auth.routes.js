// Importando o pacote 'express' para criar as rotas
import express from 'express';
//danado que tem os cruds de auth
import AuthController from '../controllers/auth.controller.js';

import  { authenticateToken } from '../middlewares/authenticate.middlewares.js';

const authRoutes = express.Router();
// deixei aqui um modelo, para quem for criar o swagger, boa sorte bjs

/**
  @swagger
components:
  schemas:
    Auth:
      type: object
      required:
        - email
        - senha
      properties:
        id:
          type: string
          format: uuid
          description: ID único do usuário
        email:
          type: string
          format: email
          description: Email único do usuário
        senha:
          type: string
          format: password
          description: Senha do usuário
        papel:
          type: string
          enum: [admin, user, moderador]  # Altere conforme os papéis reais do sistema
          description: Papel ou função do usuário no sistema
        createdAt:
          type: string
          format: date-time
          description: Data de criação
        updatedAt:
          type: string
          format: date-time
          description: Data da última atualização

 */

/**
  @swagger
paths:
  /auth/criar:
    post:
      summary: Cria um novo usuário
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AuthCreateInput'
      responses:
        '201':
          description: Usuário criado
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Auth'
        '400':
          description: Email e senha devem ser colocados!

 */

//POPST -> CRIAR USUARIO -> auth/criar
authRoutes.post("/criar", AuthController.criar);

/**
 * @swagger
paths:
  /auth/login:
    post:
      summary: Faz login em um usuário
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LoginInput'
      responses:
        '201':
          description: Logado com sucesso, usuário autenticado
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Auth'
        '400':
          description: Email e senha devem ser colocados!

 */

//POPST ->  LOGIN -> auth/login
authRoutes.post("/login",AuthController.login);

/**
 * @swagger
 paths:
  /auth/eu:
    get:
      summary: Retorna o usuário logado a partir do token
      tags:
        - Auth
      responses:
        '200':
          description: Dados do usuário autenticado
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Auth'
        '401':
          description: Token inválido ou não enviado
        '500':
          description: Erro interno do servidor

 */

//GET ->    BUSCAR -> auth/eu
authRoutes.get("/eu",authenticateToken ,AuthController.eu);

/**
 @swagger
 paths:
  /auth/logouth:
    post:
      summary: Faz logout em um usuário
      tags:
        - Auth
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/LogoutInput'
      responses:
        '200':
          description: Logout realizado!
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Auth'
        '400':
          description: Token ausente ou inválido
        '500':
          description: Erro interno do servidor

 */

//POPST ->  LOGOUT -> auth/lkogout
authRoutes.post("/logout",AuthController.logout);

export default authRoutes;


