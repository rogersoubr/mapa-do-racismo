# Endpoints de Respostas

Os endpoints de respostas permitem gerenciar as respostas associadas às localizações onde ocorreram casos de racismo.

## Listar Respostas

Retorna uma lista de todas as respostas cadastradas.

**Endpoint:** `GET /api/respostas`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "texto": "Resposta à ocorrência na estação de metrô",
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

## Criar Resposta

Cria uma nova resposta para uma localização.

**Endpoint:** `POST /api/respostas`

**Corpo da Requisição:**
```json
{
  "texto": "Esta ocorrência foi reportada às autoridades locais",
  "localizacaoId": 1
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 2,
  "texto": "Esta ocorrência foi reportada às autoridades locais",
  "localizacaoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Buscar Resposta por ID

Retorna uma resposta específica pelo ID.

**Endpoint:** `GET /api/respostas/:id`

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "texto": "Resposta à ocorrência na estação de metrô",
  "localizacaoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "localizacao": {
    "id": 1,
    "nome": "Estação de Metrô"
  }
}
```

## Listar Respostas por Localização

Retorna todas as respostas associadas a uma localização específica.

**Endpoint:** `GET /api/respostas/localizacao/:localizacaoId`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "texto": "Resposta à ocorrência na estação de metrô",
    "localizacaoId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "texto": "Esta ocorrência foi reportada às autoridades locais",
    "localizacaoId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

## Atualizar Resposta

Atualiza uma resposta existente.

**Endpoint:** `PUT /api/respostas/:id`

**Corpo da Requisição:**
```json
{
  "texto": "Resposta atualizada: caso encaminhado ao Ministério Público"
}
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "texto": "Resposta atualizada: caso encaminhado ao Ministério Público",
  "localizacaoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Remover Resposta

Remove uma resposta existente.

**Endpoint:** `DELETE /api/respostas/:id`

**Resposta de Sucesso (204):**
Sem conteúdo
