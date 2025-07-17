import express from 'express';
import  AdminController from '../controllers/admin.controller.js';
import  { authenticateToken, requireAdmin } from '../middlewares/authenticate.middlewares.js';

const adminRoutes = express.Router();



// Middleware de autenticação para todas as rotas
adminRoutes.use(authenticateToken);//se ta logado
adminRoutes.use(requireAdmin);//se e admim


 /**
    @swagger
 paths:
  /admins:
    post:
      summary: Cria um novo administrador
      tags:
        - Admins
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/Admin'
      responses:
        '201':
          description: Administrador criado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Admin'
        '400':
          description: Requisição inválida
        '500':
          description: Erro interno no servidor

components:
  schemas:
    Admin:
      type: object
      required:
        - email
        - senha
        - regra
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
        regra:
          type: string
          enum: [admin, editor, viewer] # Altere conforme suas regras reais
          description: Regra ou papel atribuído ao usuário
        createdAt:
          type: string
          format: date-time
          description: Data de criação do registro
        updatedAt:
          type: string
          format: date-time
          description: Data da última atualização do registro
*/
 

/**
 @swagger
 paths:
  /admin/usuarios:
    get:
      summary: Retorna todos os usuários
      tags:
        - Admin
      responses:
        '200':
          description: Lista todos os usuários
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/TipoRacismo'
        '500':
          description: Erro interno no servidor
*/

// Rotas de usuário
//tem que criar o swagger aqui meus amores
adminRoutes.get('/usuarios', AdminController.listarUsuarios); // Obter perfil do usuário logado

/**
  @swagger
 paths:
  /admin/status:
    get:
      summary: Retorna as estatísticas de usuários
      tags:
        - Admin
      responses:
        '200':
          description: Lista estatísticas dos usuários
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/EstatisticasUsuarios'
        '500':
          description: Erro interno no servidor
*/

adminRoutes.get('/status', AdminController.statusPapel); // rota para ler as estatísticas dos usuários

/**
  @swagger
 paths:
  /admin/deletar/{id}:
    delete:
      summary: Remove um outro usuário
      tags:
        - Admin
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: string
          description: ID do usuário a ser deletado
      responses:
        '204':
          description: Usuário deletado com sucesso!
        '400':
          description: Não é possível deletar a si mesmo. Procure ajuda!
        '500':
          description: Erro interno do servidor

 */
adminRoutes.delete('/deletar/:id', AdminController.deletarUsuario); // Deletar por id

export default adminRoutes;