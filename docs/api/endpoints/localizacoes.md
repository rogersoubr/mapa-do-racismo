# Endpoints de Localizações

Os endpoints de localizações permitem gerenciar os locais onde ocorreram casos de racismo.

## Listar Localizações

Retorna uma lista de todas as localizações cadastradas.

**Endpoint:** `GET /api/localizacoes`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "nome": "Estação de Metrô",
    "descricao": "Ocorrência na estação central",
    "latitude": -23.550520,
    "longitude": -46.633308,
    "bairro": "Centro",
    "rua": "Av. Paulista",
    "tipoRacismoId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "tipoRacismo": {
      "id": 1,
      "descricao": "Racismo Estrutural"
    },
    "_count": {
      "respostas": 2
    }
  }
]
```

## Criar Localização

Cria uma nova localização.

**Endpoint:** `POST /api/localizacoes`

**Corpo da Requisição:**
```json
{
  "nome": "Estação de Metrô",
  "descricao": "Ocorrência na estação central",
  "latitude": -23.550520,
  "longitude": -46.633308,
  "bairro": "Centro",
  "rua": "Av. Paulista",
  "tipoRacismoId": 1
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 1,
  "nome": "Estação de Metrô",
  "descricao": "Ocorrência na estação central",
  "latitude": -23.550520,
  "longitude": -46.633308,
  "bairro": "Centro",
  "rua": "Av. Paulista",
  "tipoRacismoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "tipoRacismo": {
    "id": 1,
    "descricao": "Racismo Estrutural"
  },
  "_count": {
    "respostas": 0
  }
}
```

## Buscar Localização por ID

Retorna uma localização específica pelo ID.

**Endpoint:** `GET /api/localizacoes/:id`

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "nome": "Estação de Metrô",
  "descricao": "Ocorrência na estação central",
  "latitude": -23.550520,
  "longitude": -46.633308,
  "bairro": "Centro",
  "rua": "Av. Paulista",
  "tipoRacismoId": 1,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "tipoRacismo": {
    "id": 1,
    "descricao": "Racismo Estrutural"
  },
  "respostas": [
    {
      "id": 1,
      "texto": "Resposta à ocorrência",
      "createdAt": "2023-01-01T00:00:00.000Z"
    }
  ],
  "_count": {
    "respostas": 1
  }
}
```

## Atualizar Localização

Atualiza uma localização existente.

**Endpoint:** `PUT /api/localizacoes/:id`

**Corpo da Requisição:**
```json
{
  "nome": "Estação de Metrô - Atualizado",
  "descricao": "Descrição atualizada",
  "latitude": -23.550520,
  "longitude": -46.633308,
  "bairro": "Centro",
  "rua": "Av. Paulista",
  "tipoRacismoId": 2
}
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "nome": "Estação de Metrô - Atualizado",
  "descricao": "Descrição atualizada",
  "latitude": -23.550520,
  "longitude": -46.633308,
  "bairro": "Centro",
  "rua": "Av. Paulista",
  "tipoRacismoId": 2,
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z",
  "tipoRacismo": {
    "id": 2,
    "descricao": "Racismo Institucional"
  },
  "_count": {
    "respostas": 1
  }
}
```

## Remover Localização

Remove uma localização existente.

**Endpoint:** `DELETE /api/localizacoes/:id`

**Resposta de Sucesso (204):**
Sem conteúdo

## Buscar Localizações por Tipo de Racismo

Retorna localizações filtradas por tipo de racismo.

**Endpoint:** `GET /api/localizacoes/tipo/:tipoRacismoId`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "nome": "Estação de Metrô",
    "descricao": "Ocorrência na estação central",
    "latitude": -23.550520,
    "longitude": -46.633308,
    "bairro": "Centro",
    "rua": "Av. Paulista",
    "tipoRacismoId": 1,
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z",
    "tipoRacismo": {
      "id": 1,
      "descricao": "Racismo Estrutural"
    },
    "_count": {
      "respostas": 2
    }
  }
]
```
