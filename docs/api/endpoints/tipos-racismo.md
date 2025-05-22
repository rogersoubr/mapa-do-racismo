# Endpoints de Tipos de Racismo

Os endpoints de tipos de racismo permitem gerenciar as categorias de racismo registradas no sistema.

## Listar Tipos de Racismo

Retorna uma lista de todos os tipos de racismo cadastrados.

**Endpoint:** `GET /api/tipos-racismo`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "descricao": "Racismo Estrutural",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  },
  {
    "id": 2,
    "descricao": "Racismo Institucional",
    "createdAt": "2023-01-01T00:00:00.000Z",
    "updatedAt": "2023-01-01T00:00:00.000Z"
  }
]
```

## Criar Tipo de Racismo

Cria um novo tipo de racismo.

**Endpoint:** `POST /api/tipos-racismo`

**Corpo da Requisição:**
```json
{
  "descricao": "Racismo Recreativo"
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 3,
  "descricao": "Racismo Recreativo",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Buscar Tipo de Racismo por ID

Retorna um tipo de racismo específico pelo ID.

**Endpoint:** `GET /api/tipos-racismo/:id`

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "descricao": "Racismo Estrutural",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Atualizar Tipo de Racismo

Atualiza um tipo de racismo existente.

**Endpoint:** `PUT /api/tipos-racismo/:id`

**Corpo da Requisição:**
```json
{
  "descricao": "Racismo Estrutural - Atualizado"
}
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "descricao": "Racismo Estrutural - Atualizado",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

## Remover Tipo de Racismo

Remove um tipo de racismo existente.

**Endpoint:** `DELETE /api/tipos-racismo/:id`

**Resposta de Sucesso (204):**
Sem conteúdo
