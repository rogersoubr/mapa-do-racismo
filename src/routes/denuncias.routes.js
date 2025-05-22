import express from 'express';
import { createDenuncia, getDenuncias, getDenunciaById, updateDenuncia, deleteDenuncia } from '../controllers/denuncias.controller.js';

const router = express.Router();


/**
 * @swagger
 * components:
  schemas:
    Denuncia:
      type: object
      properties:
        id:
          type: integer
        descricao:
          type: string
        localizacao:
          type: string
        data:
          type: string
          format: date-time
    DenunciaInput:
      type: object
      properties:
        descricao:
          type: string
        localizacao:
          type: string
      required:
        - descricao
        - localizacao
 */

/**
 * @swagger
 *   /denuncia:
    post:
      summary: Cria uma nova denúncia
      tags:
        - Denuncias
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/DenunciaInput'
      responses:
        '201':
          description: Denúncia criada com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Denuncia'
 */

router.post('/denuncia', createDenuncia);

/**
 * @swagger
 *  get:
      summary: Lista todas as denúncias
      tags:
        - Denuncias
      responses:
        '200':
          description: Lista de denúncias
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Denuncia'
 */

router.get('/denuncia', getDenuncias);

/**
 * @swagger
 *  /denuncia/{id}:
    get:
      summary: Busca uma denúncia por ID
      tags:
        - Denuncias
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Denúncia encontrada
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Denuncia'
        '404':
          description: Denúncia não encontrada
 */

router.get('/denuncia/:id', getDenunciaById);

/**
 * @swagger
 *  put:
      summary: Atualiza uma denúncia
      tags:
        - Denuncias
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      requestBody:
        required: true
        content:
          application/json:
            schema:
              $ref: '#/components/schemas/DenunciaInput'
      responses:
        '200':
          description: Denúncia atualizada
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Denuncia'
 */

router.put('/denuncia/:id', updateDenuncia);

/**
 * @swagger
 *  delete:
      summary: Remove uma denúncia
      tags:
        - Denuncias
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '204':
          description: Denúncia removida com sucesso
 */
router.delete('/denuncia/:id', deleteDenuncia);

export default router;