# Instalação

Este guia explica como instalar e configurar o projeto Mapa do Racismo localmente.

## Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- Node.js (versão 16 ou superior)
- npm (geralmente vem com o Node.js)
- Git

## Passos para Instalação

### 1. Clone o Repositório

```bash
git clone https://github.com/Kelvisduank/mapa-do-racismo.git
cd mapa-do-racismo
```

### 2. Instale as Dependências

```bash
npm install
```

### 3. Configure as Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto com base no arquivo `.env.example`:

```bash
cp .env.example .env
```

Edite o arquivo `.env` e configure as seguintes variáveis:

```
NODE_ENV=development
PORT=3000
JWT_SECRET=seu_segredo_super_seguro_aqui
DATABASE_URL=postgresql://usuario:senha@localhost:5432/mapa_racismo
```

### 4. Configure o Banco de Dados

Se você estiver usando PostgreSQL, crie um banco de dados:

```bash
createdb mapa_racismo
```

Execute as migrações do Prisma:

```bash
npx prisma migrate dev
```

### 5. Popule o Banco de Dados com Dados Iniciais

```bash
npm run seed
```

### 6. Inicie o Servidor

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## Próximos Passos

Após a instalação, você pode:

- Explorar a [API](../api/visao-geral.md)
- Configurar o [ambiente de desenvolvimento](configuracao.md)
- Executar os [testes](../desenvolvimento/testes.md)
