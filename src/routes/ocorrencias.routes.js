import {
        criarOcorrencia, 
        listarOcorrencias, 
        atualizarOcorrencia, 
        removerOcorrencia,
        buscarOcorrenciaPorId
    } from '../controllers/ocorrencias.controller.js'

import express from 'express';

const router = express.Router();

/**
 * @swagger
 * components:
  schemas:
    Ocorrencia:
      type: object
      properties:
        id:
          type: integer
        descricao:
          type: string
        data:
          type: string
          format: date-time
        status:
          type: string
        localizacaoId:
          type: integer
        tipoRacismoId:
          type: integer
        createdAt:
          type: string
          format: date-time
        updatedAt:
          type: string
          format: date-time
*/

/**
 * @swagger
 *   /ocorrencias:
    post:
      summary: Cria uma nova ocorrência
      tags:
        - Ocorrencias
      requestBody:
        required: true
        content:
          application/json:
            schema:
              type: object
              properties:
                descricao:
                  type: string
                localizacaoId:
                  type: integer
                tipoRacismoId:
                  type: integer
                status:
                  type: string
              required:
                - descricao
                - localizacaoId
                - tipoRacismoId
      responses:
        '201':
          description: Ocorrência criada com sucesso
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Ocorrencia'
*/

router.post('/ocorrencias', criarOcorrencia());

/** 
 * @swagger
 *  /ocorrencias:
 *     get:
      summary: Lista todas as ocorrências
      tags:
        - Ocorrencias
      responses:
        '200':
          description: Lista de ocorrências
          content:
            application/json:
              schema:
                type: array
                items:
                  $ref: '#/components/schemas/Ocorrencia'

*/

router.get('/ocorrencias', listarOcorrencias());

/**
 * @swagger
 * /ocorrencias/{id}:
 * put:
      summary: Atualiza uma ocorrência
      tags:
        - Ocorrencias
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
              type: object
              properties:
                descricao:
                  type: string
                localizacaoId:
                  type: integer
                tipoRacismoId:
                  type: integer
                status:
                  type: string
      responses:
        '200':
          description: Ocorrência atualizada
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Ocorrencia'
*/

router.put('/ocorrencias/:id', atualizarOcorrencia());

/**
 * @swagger
 * /ocorrencias/{id}:
 *  delete:
      summary: Remove uma ocorrência
      tags:
        - Ocorrencias
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '204':
          description: Ocorrência removida com sucesso
*/

router.delete('/ocorrencias/:id', removerOcorrencia());


/**
 * @swagger
 *  /ocorrencias/{id}:
    get:
      summary: Busca uma ocorrência por ID
      tags:
        - Ocorrencias
      parameters:
        - in: path
          name: id
          required: true
          schema:
            type: integer
      responses:
        '200':
          description: Ocorrência encontrada
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Ocorrencia'
        '404':
          description: Ocorrência não encontrada
*/
router.get('/ocorrencias/:id', buscarOcorrenciaPorId());

export default router;