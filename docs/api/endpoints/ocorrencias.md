# Endpoints de Ocorrências

Os endpoints de ocorrências permitem gerenciar os registros de casos reportados.

## Listar Ocorrências

Retorna uma lista de todas as ocorrências cadastradas.

**Endpoint:** `GET /api/ocorrencias`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "descricao": "xenofobia em transporte público",
    "data": "2024-05-22T12:00:00.000Z",
    "status": "aberta",
    "localizacaoId": 2,
    "tipoRacismoId": 1,
    "createdAt": "2024-05-22T12:00:00.000Z",
    "updatedAt": "2024-05-22T12:00:00.000Z"
  }
]
```

## Criar Ocorrência

Cria uma nova ocorrência.

**Endpoint:** `POST /api/ocorrencias`

**Corpo da Requisição:**
```json
{
  "descricao": "insulto racial em praça pública",
  "localizacaoId": 2,
  "tipoRacismoId": 1,
  "status": "aberta"
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 2,
  "descricao": "insulto racial em praça pública",
  "data": "2024-05-22T13:00:00.000Z",
  "status": "aberta",
  "localizacaoId": 2,
  "tipoRacismoId": 1,
  "createdAt": "2024-05-22T13:00:00.000Z",
  "updatedAt": "2024-05-22T13:00:00.000Z"
}
```

## Buscar Ocorrência por ID

Retorna uma ocorrência específica pelo ID.

**Endpoint:** `GET /api/ocorrencias/:id`

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "descricao": "xenofobia em transporte público",
  "data": "2024-05-22T12:00:00.000Z",
  "status": "aberta",
  "localizacaoId": 2,
  "tipoRacismoId": 1,
  "createdAt": "2024-05-22T12:00:00.000Z",
  "updatedAt": "2024-05-22T12:00:00.000Z"
}
```

**Resposta de Erro (404):**
```json
{ "error": "Ocorrência não encontrada" }
```

## Atualizar Ocorrência

Atualiza uma ocorrência existente.

**Endpoint:** `PUT /api/ocorrencias/:id`

**Corpo da Requisição:**
```json
{
  "descricao": "caso de racismo institucional",
  "localizacaoId": 2,
  "tipoRacismoId": 2,
  "status": "fechada"
}
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "descricao": "caso de racismo institucional",
  "data": "2024-05-22T12:00:00.000Z",
  "status": "fechada",
  "localizacaoId": 2,
  "tipoRacismoId": 2,
  "createdAt": "2024-05-22T12:00:00.000Z",
  "updatedAt": "2024-05-22T14:00:00.000Z"
}
```

## Remover Ocorrência

Remove uma ocorrência existente.

**Endpoint:** `DELETE /api/ocorrencias/:id`

**Resposta de Sucesso (204):**
Sem conteúdo

**Resposta de Erro (400):**
```json
{ "error": "Não foi possível remover a ocorrência" }
```