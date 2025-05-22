# Autenticação

A API do Mapa do Racismo utiliza autenticação JWT (JSON Web Token) para proteger rotas sensíveis.

## Fluxo de Autenticação

1. O cliente envia credenciais para o endpoint de login
2. O servidor valida as credenciais e retorna um token JWT
3. O cliente inclui o token JWT no cabeçalho `Authorization` de requisições subsequentes
4. O servidor valida o token e permite ou rejeita o acesso

## Endpoints de Autenticação

### Login

**Endpoint:** `POST /api/auth/login`

**Corpo da Requisição:**
```json
{
  "email": "usuario@exemplo.com",
  "senha": "senha123"
}
```

**Resposta de Sucesso (200):**
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "usuario": {
    "id": 1,
    "nome": "Usuário Exemplo",
    "email": "usuario@exemplo.com"
  }
}
```

### Registro

**Endpoint:** `POST /api/auth/registro`

**Corpo da Requisição:**
```json
{
  "nome": "Novo Usuário",
  "email": "novo@exemplo.com",
  "senha": "senha123"
}
```

**Resposta de Sucesso (201):**
```json
{
  "mensagem": "Usuário registrado com sucesso",
  "usuario": {
    "id": 2,
    "nome": "Novo Usuário",
    "email": "novo@exemplo.com"
  }
}
```

## Usando o Token

Para acessar rotas protegidas, inclua o token no cabeçalho `Authorization` usando o esquema `Bearer`:

```
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
```

## Segurança

- Os tokens JWT têm validade de 24 horas
- As senhas são armazenadas com hash seguro usando bcrypt
- Todas as comunicações devem ser feitas via HTTPS em produção
