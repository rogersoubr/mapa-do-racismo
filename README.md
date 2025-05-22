# Mapa do Racismo API

API para mapeamento e documentação de casos de racismo no Brasil.

## 📋 Índice

- [Requisitos](#requisitos)
- [Instalação](#instalação)
- [Estrutura do Projeto](#estrutura-do-projeto)
- [Documentação](#documentação)
  - [MkDocs](#mkdocs)
  - [Swagger](#swagger)
- [Testes](#testes)
- [Deploy](#deploy)
- [Contribuição](#contribuição)
- [Licença](#licença)

## 🔧 Requisitos

- Node.js (versão 16 ou superior)
- npm (geralmente vem com o Node.js)
- Python 3.x (para MkDocs)
- PostgreSQL

## 🚀 Instalação

1. **Clone o repositório**

```bash
git clone https://github.com/Kelvisduank/mapa-do-racismo.git
cd mapa-do-racismo
```

2. **Instale as dependências**

```bash
npm install
```

3. **Configure as variáveis de ambiente**

Crie um arquivo `.env` na raiz do projeto:

```
NODE_ENV=development
PORT=3000
JWT_SECRET=seu_segredo_super_seguro_aqui
DATABASE_URL=postgresql://usuario:senha@localhost:5432/mapa_racismo
```

4. **Execute as migrações do banco de dados**

```bash
npx prisma migrate dev
```

5. **Inicie o servidor**

```bash
npm start
```

O servidor estará disponível em `http://localhost:3000`.

## 📁 Estrutura do Projeto

```
mapa-do-racismo/
├── docs/                  # Documentação MkDocs
├── prisma/                # Schema e migrações do Prisma
├── src/
│   ├── config/            # Configurações (Swagger, etc.)
│   ├── controllers/       # Controladores da API
│   ├── middlewares/       # Middlewares Express
│   ├── models/            # Modelos de dados
│   ├── routes/            # Rotas da API
│   ├── app.js             # Configuração do Express
│   └── server.js          # Ponto de entrada da aplicação
├── tests/                 # Testes automatizados
├── .env                   # Variáveis de ambiente (não versionado)
├── .env.example           # Exemplo de variáveis de ambiente
├── .gitignore             # Arquivos ignorados pelo Git
├── mkdocs.yml             # Configuração do MkDocs
├── package.json           # Dependências e scripts
└── README.md              # Este arquivo
```

## 📚 Documentação

### MkDocs

O projeto utiliza [MkDocs](https://www.mkdocs.org/) com o tema [Material](https://squidfunk.github.io/mkdocs-material/) para a documentação.

#### Instalação do MkDocs

```bash
pip install mkdocs mkdocs-material
```

#### Visualização local da documentação

```bash
python -m mkdocs serve
```

A documentação estará disponível em `http://localhost:8000`.

#### Construção da documentação

```bash
python -m mkdocs build
```

Os arquivos HTML serão gerados na pasta `site/`.

#### Adicionando novos documentos

1. Crie um arquivo Markdown (`.md`) na pasta `docs/` ou em uma subpasta
2. Adicione a referência ao arquivo no `mkdocs.yml` na seção `nav`:

```yaml
nav:
  - Home: index.md
  - API:
    - Visão Geral: api/visao-geral.md
    - Novo Documento: api/novo-documento.md  # Adicione aqui
```

3. Execute `python -m mkdocs build` para atualizar a documentação

#### Publicação da documentação

A documentação pode ser publicada no GitHub Pages:

```bash
python -m mkdocs gh-deploy
```

Ou você pode hospedar os arquivos da pasta `site/` em qualquer servidor web.

### Swagger

A API é documentada usando Swagger/OpenAPI. A documentação interativa está disponível em `http://localhost:3000/api-docs` quando o servidor está em execução.

#### Testando a API com Swagger

1. Inicie o servidor: `npm start`
2. Abra o navegador e acesse `http://localhost:3000/api-docs`
3. Você verá a interface do Swagger com todos os endpoints documentados
4. Para testar um endpoint:
   - Clique no endpoint desejado
   - Clique em "Try it out"
   - Preencha os parâmetros necessários
   - Clique em "Execute"
   - Veja a resposta da API

#### Testando a API com Insomnia

1. Baixe e instale o [Insomnia](https://insomnia.rest/download)
2. Crie um novo workspace
3. Importe a coleção de endpoints (se disponível) ou crie manualmente:
   - Clique em "New Request"
   - Defina o método (GET, POST, etc.)
   - Digite a URL (ex: `http://localhost:3000/api/localizacoes`)
   - Configure os cabeçalhos e corpo da requisição, se necessário
   - Envie a requisição e veja a resposta

## 🧪 Testes

O projeto utiliza Jest para testes automatizados.

### Executando os testes

```bash
npm test
```

### Executando testes com cobertura

```bash
npm run test:coverage
```

### Adicionando novos testes

1. Crie um arquivo de teste na pasta `tests/` com o nome seguindo o padrão `*.test.js`
2. Escreva seus testes usando Jest
3. Execute `npm test` para verificar se os testes passam

## 🚢 Deploy

### Deploy no Render

1. Crie uma conta no [Render](https://render.com/)
2. Clique em "New" e selecione "Web Service"
3. Conecte seu repositório GitHub
4. Configure o serviço:
   - **Nome**: `mapa-do-racismo-api` (ou outro nome)
   - **Ambiente**: `Node`
   - **Build Command**: `npm install && npx prisma migrate deploy`
   - **Start Command**: `npm start`
5. Configure as variáveis de ambiente:
   - `NODE_ENV`: `production`
   - `PORT`: `10000` (o Render substituirá isso)
   - `JWT_SECRET`: Seu segredo JWT
   - `DATABASE_URL`: URL de conexão com o banco de dados PostgreSQL
6. Clique em "Create Web Service"

### Banco de Dados no Render

1. No dashboard do Render, clique em "New" e selecione "PostgreSQL"
2. Configure o banco de dados:
   - **Nome**: `mapa-do-racismo-db` (ou outro nome)
   - **Plano**: Selecione o plano adequado
3. Após a criação, copie a "Internal Database URL" para a variável `DATABASE_URL` do seu Web Service

### Verificando o Deploy

Após o deploy, acesse a URL fornecida pelo Render (algo como `https://mapa-do-racismo-api.onrender.com`).

Para verificar a documentação Swagger, acesse `https://mapa-do-racismo-api.onrender.com/api-docs`.

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Faça um fork do repositório
2. Crie uma branch para sua feature: `git checkout -b feature/nova-feature`
3. Faça commit das suas alterações: `git commit -m 'feat: Adiciona nova feature'`
4. Envie para o seu fork: `git push origin feature/nova-feature`
5. Abra um Pull Request

## 📄 Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.
