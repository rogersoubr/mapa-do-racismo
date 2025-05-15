# Documentação da API - Tipos de Racismo

Esta documentação descreve os endpoints disponíveis para gerenciar os tipos de racismo no sistema.

## Endpoints

### Listar todos os tipos de racismo ativos
```
GET /api/tipos-racismo
```

**Resposta de sucesso (200 OK):**
```json
[
  {
    "id": 1,
    "nome": "Racismo Estrutural",
    "descricao": "Manifestações de racismo enraizadas nas instituições e na sociedade",
    "ativo": true,
    "createdAt": "2025-05-15T13:00:00.000Z",
    "updatedAt": "2025-05-15T13:00:00.000Z"
  },
  ...
]
```

### Obter um tipo de racismo específico
```
GET /api/tipos-racismo/:id
```

**Parâmetros de URL:**
- `id` (obrigatório): ID do tipo de racismo

**Resposta de sucesso (200 OK):**
```json
{
  "id": 1,
  "nome": "Racismo Estrutural",
  "descricao": "Manifestações de racismo enraizadas nas instituições e na sociedade",
  "ativo": true,
  "createdAt": "2025-05-15T13:00:00.000Z",
  "updatedAt": "2025-05-15T13:00:00.000Z"
}
```

**Resposta de erro (404 Not Found):**
```json
{
  "error": "Tipo de racismo não encontrado"
}
```

### Criar um novo tipo de racismo
```
POST /api/tipos-racismo
```

**Corpo da requisição (JSON):**
```json
{
  "nome": "Racismo Institucional",
  "descricao": "Práticas discriminatórias dentro de instituições"
}
```

**Campos obrigatórios:**
- `nome`: Nome do tipo de racismo (string, único)
- `descricao`: Descrição detalhada (opcional)

**Resposta de sucesso (201 Created):**
```json
{
  "id": 2,
  "nome": "Racismo Institucional",
  "descricao": "Práticas discriminatórias dentro de instituições",
  "ativo": true,
  "updatedAt": "2025-05-15T13:05:00.000Z",
  "createdAt": "2025-05-15T13:05:00.000Z"
}
```

**Resposta de erro (400 Bad Request):**
```json
{
  "error": "Já existe um tipo de racismo com este nome"
}
```

### Atualizar um tipo de racismo
```
PUT /api/tipos-racismo/:id
```

**Parâmetros de URL:**
- `id` (obrigatório): ID do tipo de racismo a ser atualizado

**Corpo da requisição (JSON):**
```json
{
  "nome": "Racismo Estrutural e Institucional",
  "descricao": "Manifestações de racismo enraizadas nas instituições e na sociedade",
  "ativo": true
}
```

**Campos opcionais:**
- `nome`: Novo nome para o tipo de racismo
- `descricao`: Nova descrição
- `ativo`: Status de ativação (boolean)

**Resposta de sucesso (200 OK):**
```json
{
  "id": 1,
  "nome": "Racismo Estrutural e Institucional",
  "descricao": "Manifestações de racismo enraizadas nas instituições e na sociedade",
  "ativo": true,
  "createdAt": "2025-05-15T13:00:00.000Z",
  "updatedAt": "2025-05-15T13:10:00.000Z"
}
```

### Excluir (desativar) um tipo de racismo
```
DELETE /api/tipos-racismo/:id
```

**Parâmetros de URL:**
- `id` (obrigatório): ID do tipo de racismo a ser desativado

**Resposta de sucesso (200 OK):**
```json
{
  "message": "Tipo de racismo desativado com sucesso"
}
```

## Executando as migrações

Para criar a tabela no banco de dados, execute o comando de migração:

```bash
npx sequelize-cli db:migrate
```

## Testando a API

Você pode testar a API usando ferramentas como [Postman](https://www.postman.com/) ou [cURL](https://curl.se/). Certifique-se de que o servidor esteja em execução:

```bash
npm start
```

## Considerações de Segurança

- A API utiliza autenticação JWT (conforme implementado no projeto)
- Todos os endpoints exigem autenticação, exceto os configurados como públicos
- As senhas são armazenadas com hash seguro usando bcrypt
- As rotas são protegidas contra ataques comuns (CORS, rate limiting, etc.)
