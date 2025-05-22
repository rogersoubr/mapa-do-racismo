# Visão Geral da API

A API do Mapa do Racismo segue os princípios RESTful e utiliza JSON para formatação de dados. Todos os endpoints retornam respostas em formato JSON.

## URL Base

```
http://localhost:3000/api
```

Em produção:
```
https://mapa-do-racismo.onrender.com/api
```

## Recursos Principais

A API possui os seguintes recursos principais:

| Recurso | Descrição |
|---------|-----------|
| `/tipos-racismo` | Gerenciamento de tipos de racismo |
| `/localizacoes` | Gerenciamento de localizações onde ocorreram casos |
| `/respostas` | Gerenciamento de respostas sobre ocorrências |
| `/avaliacoes` | Gerenciamento de avaliações |

## Formato de Resposta

Todas as respostas seguem um formato padrão:

### Sucesso

```json
{
  "id": 1,
  "nome": "Exemplo",
  "descricao": "Descrição do exemplo",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

### Erro

```json
{
  "error": "Mensagem de erro",
  "details": "Detalhes adicionais sobre o erro"
}
```

## Códigos de Status HTTP

A API utiliza os seguintes códigos de status HTTP:

| Código | Descrição |
|--------|-----------|
| 200 | OK - A requisição foi bem-sucedida |
| 201 | Created - Um novo recurso foi criado |
| 204 | No Content - A requisição foi bem-sucedida, mas não há conteúdo para retornar |
| 400 | Bad Request - A requisição contém parâmetros inválidos |
| 404 | Not Found - O recurso solicitado não foi encontrado |
| 500 | Internal Server Error - Erro interno do servidor |
