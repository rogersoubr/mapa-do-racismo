# Endpoints de Avaliações

Os endpoints de avaliações permitem gerenciar as avaliações associadas às localizações onde ocorreram casos de racismo.

## Listar Avaliações

Retorna uma lista de todas as avaliações cadastradas.

**Endpoint:** `GET /api/avaliacoes`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "nota": 4,
    "comentario": "Atendimento rápido das autoridades",
    "localizacaoId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "localizacao": {
      "id": 1,
      "nome": "Estação de Metrô"
    }
  }
]
```

## Criar Avaliação

Cria uma nova avaliação para uma localização.

**Endpoint:** `POST /api/avaliacoes`

**Corpo da Requisição:**
```json
{
  "nota": 5,
  "comentario": "Excelente tratamento do caso",
  "localizacaoId": 1
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 2,
  "nota": 5,
  "comentario": "Excelente tratamento do caso",
  "localizacaoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Buscar Avaliação por ID

Retorna uma avaliação específica pelo ID.

**Endpoint:** `GET /api/avaliacoes/:id`

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "nota": 4,
  "comentario": "Atendimento rápido das autoridades",
  "localizacaoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "localizacao": {
    "id": 1,
    "nome": "Estação de Metrô"
  }
}
```

## Atualizar Avaliação

Atualiza uma avaliação existente.

**Endpoint:** `PUT /api/avaliacoes/:id`

**Corpo da Requisição:**
```json
{
  "nota": 3,
  "comentario": "Atendimento razoável, poderia ser melhor"
}
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "nota": 3,
  "comentario": "Atendimento razoável, poderia ser melhor",
  "localizacaoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Remover Avaliação

Remove uma avaliação existente.

**Endpoint:** `DELETE /api/avaliacoes/:id`

**Resposta de Sucesso (204):**
Sem conteúdo
