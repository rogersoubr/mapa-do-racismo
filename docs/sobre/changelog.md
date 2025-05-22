# Changelog

Este documento registra todas as mudanças significativas feitas no projeto Mapa do Racismo.

## [Não lançado]

### Adicionado
- Documentação completa com MkDocs
- Guias de instalação e configuração
- Documentação detalhada da API

## [1.0.0] - 2023-05-22

### Adicionado
- Implementação inicial da API RESTful
- Endpoints para gerenciamento de localizações
- Endpoints para gerenciamento de tipos de racismo
- Endpoints para gerenciamento de respostas
- Endpoints para gerenciamento de avaliações
- Documentação da API com Swagger
- Testes automatizados com Jest
- Integração com banco de dados PostgreSQL via Prisma ORM

### Alterado
- Estrutura do projeto reorganizada para melhor manutenção

### Corrigido
- Problemas de CORS para permitir acesso de clientes web
- Validação de dados de entrada em todos os endpoints

## [0.2.0] - 2023-04-15

### Adicionado
- Autenticação JWT para rotas protegidas
- Validação de dados de entrada
- Paginação para endpoints que retornam listas

### Alterado
- Melhorias na estrutura do banco de dados
- Otimização de consultas ao banco de dados

### Corrigido
- Tratamento de erros aprimorado
- Correção de bugs em endpoints específicos

## [0.1.0] - 2023-03-01

### Adicionado
- Estrutura inicial do projeto
- Configuração do ambiente de desenvolvimento
- Definição do modelo de dados
- Implementação básica de rotas
- Configuração inicial do banco de dados
