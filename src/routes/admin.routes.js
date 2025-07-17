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
  /admins:
    get:
      summary: Lista todos os usuários administradores
      tags:
        - Admins
      responses:
        '200':
          description: Lista de usuários retornada com sucesso
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/AdminResponse'
        '500':
          description: Erro interno no servidor

    post:
      summary: Cria um novo administrador
      tags:
        - Admins
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/AdminCreate'
      responses:
        '201':
          description: Administrador criado com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/AdminResponse'
        '400':
          description: Requisição inválida
        '500':
          description: Erro interno no servidor

components:
  schemas:
    AdminCreate:
      type: object
      required:
        - email
        - senha
        - regra
      properties:
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
          enum: [admin, editor, viewer]
          description: Regra ou papel atribuído ao usuário

    AdminResponse:
      type: object
      properties:
        id:
          type: string
          format: uuid
          description: ID único do usuário
        email:
          type: string
          format: email
          description: Email do usuário
        regra:
          type: string
          description: Regra ou papel atribuído ao usuário
        createdAt:
          type: string
          format: date-time
          description: Data de criação
        updatedAt:
          type: string
          format: date-time
          description: Data da última atualização


*/

// Rotas de usuário
//tem que criar o swagger aqui meus amores
adminRoutes.get('/usuarios', AdminController.listarUsuarios); // Obter perfil do usuário logado

/**
  @swagger
 paths:
  /admin/usuarios:
    get:
      summary: Retorna estatísticas de usuários por papel
      tags:
        - Admin
      responses:
        '200':
          description: Estatísticas de usuários retornadas com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/StatusUsuariosResponse'
        '500':
          description: Erro interno no servidor

components:
  schemas:
    StatusUsuariosResponse:
      type: object
      properties:
        status:
          type: object
          properties:
            totalUsuarios:
              type: integer
              description: Número total de usuários
              example: 100
            adminUsuarios:
              type: integer
              description: Número de usuários com papel ADMIN
              example: 20
            regularUsuarios:
              type: integer
              description: Número de usuários com papel USER
              example: 80

*/

adminRoutes.get('/status', AdminController.statusPapel); // rota para ler as estatísticas dos usuários

/**
  @swagger
paths:
  /admin/usuarios/{id}:
    delete:
      summary: Deleta um usuário pelo ID
      tags:
        - Admin
      parameters:
        - name: id
          in: path
          required: true
          schema:
            type: string
            format: uuid
          description: ID do usuário a ser deletado
      responses:
        '200':
          description: Usuário deletado com sucesso
          content:
            application/json:
              schema:
                type: object
                properties:
                  message:
                    type: string
                    example: Usuário deletado com sucesso!
        '400':
          description: Não é possível deletar a si mesmo
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: Não é possível deletar a si mesmo. Procure ajuda!
        '500':
          description: Erro interno no servidor
          content:
            application/json:
              schema:
                type: object
                properties:
                  error:
                    type: string
                    example: Erro interno do servidor

 */
adminRoutes.delete('/deletar/:id', AdminController.deletarUsuario); // Deletar por id

export default adminRoutes;