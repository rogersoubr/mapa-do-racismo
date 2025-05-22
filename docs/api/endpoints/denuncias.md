# Endpoints de Denúncias

Os endpoints de denúncias permitem registrar e gerenciar denúncias de casos de racismo.

## Listar Denúncias

Retorna uma lista de todas as denúncias cadastradas.

**Endpoint:** `GET /api/denuncia`

**Resposta de Sucesso (200):**
```json
[
  {
    "id": 1,
    "descricao": "xenofobia em escola",
    "localizacao": "Escola Estadual Central",
    "data": "2024-05-22T10:00:00.000Z"
  }
]
```

---

## Criar Denúncia

Cria uma nova denúncia.

**Endpoint:** `POST /api/denuncia`

**Corpo da Requisição:**
```json
{
  "descricao": "insulto racial em praça pública",
  "localizacao": "Praça da Liberdade"
}
```

**Resposta de Sucesso (201):**
```json
{
  "id": 2,
  "descricao": "insulto racial em praça pública",
  "localizacao": "Praça da Liberdade",
  "data": "2024-05-22T11:00:00.000Z"
}
```

---

## Buscar Denúncia por ID

Retorna uma denúncia específica pelo ID.

**Endpoint:** `GET /api/denuncia/:id`

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "descricao": "xenofobia em escola",
  "localizacao": "Escola Estadual Central",
  "data": "2024-05-22T10:00:00.000Z"
}
```

**Resposta de Erro (404):**
```json
{ "error": "Denúncia não encontrada" }
```

---

## Atualizar Denúncia

Atualiza uma denúncia existente.

**Endpoint:** `PUT /api/denuncia/:id`

**Corpo da Requisição:**
```json
{
  "descricao": "caso de racismo institucional",
  "localizacao": "Prefeitura Municipal"
}
```

**Resposta de Sucesso (200):**
```json
{
  "id": 1,
  "descricao": "caso de racismo institucional",
  "localizacao": "Prefeitura Municipal",
  "data": "2024-05-22T10:00:00.000Z"
}
```

---

## Remover Denúncia

Remove uma denúncia existente.

**Endpoint:** `DELETE /api/denuncia/:id`

**Resposta de Sucesso (204):**
Sem conteúdo

**Resposta de Erro (400):**
```json
{ "error": "Não foi possível remover a denúncia" }
```