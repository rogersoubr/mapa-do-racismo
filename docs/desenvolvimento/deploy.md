# Guia de Deploy

Este documento descreve como fazer o deploy da API do Mapa do Racismo em diferentes ambientes.

## Deploy no Render

O [Render](https://render.com/) é uma plataforma de hospedagem na nuvem que oferece serviços gratuitos para projetos de código aberto. Siga estas etapas para fazer o deploy da API no Render:

### Pré-requisitos

- Uma conta no Render
- Repositório do projeto no GitHub ou GitLab

### Passos para Deploy

1. **Faça login no Render**
   - Acesse [render.com](https://render.com/) e faça login na sua conta

2. **Crie um novo Web Service**
   - No dashboard, clique em "New" e selecione "Web Service"
   - Conecte seu repositório GitHub/GitLab
   - Selecione o repositório do Mapa do Racismo

3. **Configure o Web Service**
   - **Nome**: `mapa-do-racismo-api` (ou outro nome de sua escolha)
   - **Ambiente**: `Node`
   - **Build Command**: `npm install && npx prisma migrate deploy`
   - **Start Command**: `npm start`
   - **Plano**: Selecione o plano gratuito ou pago, dependendo das suas necessidades

4. **Configure as Variáveis de Ambiente**
   - Clique em "Advanced" e adicione as seguintes variáveis de ambiente:
     - `NODE_ENV`: `production`
     - `PORT`: `10000` (o Render substituirá isso automaticamente)
     - `JWT_SECRET`: Seu segredo JWT (use um valor forte e aleatório)
     - `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL

5. **Crie o Banco de Dados**
   - No dashboard do Render, clique em "New" e selecione "PostgreSQL"
   - Configure o banco de dados conforme necessário
   - Após a criação, copie a URL de conexão interna para a variável `DATABASE_URL`

6. **Inicie o Deploy**
   - Clique em "Create Web Service"
   - O Render iniciará o processo de build e deploy
   - Aguarde até que o status mude para "Live"

7. **Verifique o Deploy**
   - Acesse a URL fornecida pelo Render (algo como `https://mapa-do-racismo-api.onrender.com`)
   - Verifique se a API está funcionando acessando `/api-docs` para ver a documentação Swagger

## Deploy em Outros Ambientes

### Deploy Local com PM2

Para deploy em um servidor local ou VPS usando PM2:

1. **Instale o PM2**
   ```bash
   npm install -g pm2
   ```

2. **Configure o arquivo ecosystem.config.js**
   ```javascript
   module.exports = {
     apps: [{
       name: "mapa-do-racismo",
       script: "./src/server.js",
       env: {
         NODE_ENV: "production",
         PORT: 3000
       },
       instances: "max",
       exec_mode: "cluster"
     }]
   }
   ```

3. **Inicie a aplicação com PM2**
   ```bash
   pm2 start ecosystem.config.js
   ```

4. **Configure o PM2 para iniciar automaticamente**
   ```bash
   pm2 startup
   pm2 save
   ```

### Deploy com Docker

Para deploy usando Docker:

1. **Crie um Dockerfile**
   ```dockerfile
   FROM node:16

   WORKDIR /app

   COPY package*.json ./
   RUN npm install

   COPY . .
   RUN npx prisma generate

   EXPOSE 3000

   CMD ["npm", "start"]
   ```

2. **Crie um arquivo docker-compose.yml**
   ```yaml
   version: '3'
   services:
     api:
       build: .
       ports:
         - "3000:3000"
       environment:
         - NODE_ENV=production
         - PORT=3000
         - JWT_SECRET=seu_segredo_jwt
         - DATABASE_URL=postgresql://postgres:postgres@db:5432/mapa_racismo
       depends_on:
         - db
     db:
       image: postgres:13
       environment:
         - POSTGRES_USER=postgres
         - POSTGRES_PASSWORD=postgres
         - POSTGRES_DB=mapa_racismo
       volumes:
         - postgres_data:/var/lib/postgresql/data

   volumes:
     postgres_data:
   ```

3. **Execute com Docker Compose**
   ```bash
   docker-compose up -d
   ```

## Considerações de Segurança

- Sempre use HTTPS em produção
- Nunca exponha variáveis de ambiente sensíveis no código
- Configure limites de taxa (rate limiting) para evitar abusos
- Implemente monitoramento e logging para detectar problemas
- Mantenha todas as dependências atualizadas

## Monitoramento

Para monitorar a aplicação em produção:

- Use o dashboard do Render para monitoramento básico
- Implemente uma solução de logging como Winston ou Bunyan
- Considere serviços como New Relic, Datadog ou Sentry para monitoramento avançado

## Backups

Configure backups regulares do banco de dados:

- No Render, os backups são automáticos para bancos de dados pagos
- Para outros ambientes, configure backups automáticos usando scripts cron
- Teste regularmente a restauração de backups para garantir que funcionem quando necessário
