# Configuração

Este guia explica como configurar o ambiente de desenvolvimento para o projeto Mapa do Racismo.

## Configuração do Ambiente

### Variáveis de Ambiente

O projeto usa diferentes arquivos de ambiente para diferentes contextos:

- `.env` - Configurações para ambiente de produção
- `.env.development` - Configurações para ambiente de desenvolvimento
- `.env.test` - Configurações para ambiente de testes

Cada arquivo deve conter as seguintes variáveis:

```
NODE_ENV=development|test|production
PORT=3000
JWT_SECRET=seu_segredo_super_seguro_aqui
DATABASE_URL=postgresql://usuario:senha@localhost:5432/mapa_racismo
```

### Banco de Dados

O projeto usa Prisma ORM para interagir com o banco de dados. O schema do banco está definido em `prisma/schema.prisma`.

Para visualizar o banco de dados, você pode usar o Prisma Studio:

```bash
npx prisma studio
```

## Configuração para Desenvolvimento

### Modo de Desenvolvimento

Para executar o servidor em modo de desenvolvimento com recarga automática:

```bash
npm run dev
```

### Testes

Para executar os testes:

```bash
npm test
```

Para executar os testes em modo de observação:

```bash
npm run test:watch
```

### Documentação

Para gerar a documentação:

```bash
npm run docs:build
```

Para visualizar a documentação localmente:

```bash
npm run docs:serve
```

## Configuração do Swagger

A documentação da API é gerada automaticamente usando Swagger. Para acessar:

1. Inicie o servidor: `npm start`
2. Acesse: `http://localhost:3000/api-docs`

## Configuração para Produção

Para preparar o projeto para produção:

1. Certifique-se de que todas as variáveis de ambiente estão configuradas corretamente
2. Execute o build: `npm run build` (se aplicável)
3. Inicie o servidor: `npm start`

## Resolução de Problemas

Se você encontrar problemas com a execução de scripts no PowerShell:

```powershell
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```
