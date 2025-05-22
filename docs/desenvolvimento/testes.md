# Testes

Este documento descreve como executar e criar testes para o projeto Mapa do Racismo.

## Estrutura de Testes

O projeto utiliza Jest como framework de testes. Os testes estão organizados da seguinte forma:

- `__tests__/` - Diretório raiz para todos os testes
  - `unit/` - Testes unitários para componentes individuais
  - `integration/` - Testes de integração entre componentes
  - `e2e/` - Testes de ponta a ponta (end-to-end)

## Executando Testes

### Executar Todos os Testes

```bash
npm test
```

### Executar Testes em Modo de Observação

```bash
npm run test:watch
```

### Executar Testes com Cobertura

```bash
npm run test:coverage
```

## Escrevendo Testes

### Testes Unitários

Os testes unitários devem testar componentes individuais de forma isolada. Exemplo de teste unitário:

```javascript
const { criarLocalizacao } = require('../../src/controllers/localizacaoController');
const { PrismaClient } = require('@prisma/client');

// Mock do Prisma
jest.mock('@prisma/client', () => {
  return {
    PrismaClient: jest.fn().mockImplementation(() => {
      return {
        localizacao: {
          create: jest.fn().mockResolvedValue({
            id: 1,
            nome: 'Estação de Metrô',
            latitude: -23.5505,
            longitude: -46.6333,
            tipoRacismoId: 1
          })
        }
      };
    })
  };
});

describe('Localizacao Controller', () => {
  let req, res;

  beforeEach(() => {
    req = {
      body: {
        nome: 'Estação de Metrô',
        latitude: -23.5505,
        longitude: -46.6333,
        tipoRacismoId: 1
      }
    };
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };
  });

  it('deve criar uma nova localização', async () => {
    await criarLocalizacao(req, res);
    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
      id: 1,
      nome: 'Estação de Metrô'
    }));
  });
});
```

### Testes de Integração

Os testes de integração devem testar a interação entre diferentes componentes. Exemplo de teste de integração:

```javascript
const request = require('supertest');
const app = require('../../src/app');
const { PrismaClient } = require('@prisma/client');

// Mock do Prisma
jest.mock('@prisma/client');

describe('API de Localizações', () => {
  beforeEach(() => {
    // Configurar mocks para cada teste
    PrismaClient.mockImplementation(() => {
      return {
        localizacao: {
          findMany: jest.fn().mockResolvedValue([
            {
              id: 1,
              nome: 'Estação de Metrô',
              latitude: -23.5505,
              longitude: -46.6333,
              tipoRacismoId: 1
            }
          ])
        }
      };
    });
  });

  it('deve retornar todas as localizações', async () => {
    const res = await request(app).get('/api/localizacoes');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveLength(1);
    expect(res.body[0].nome).toEqual('Estação de Metrô');
  });
});
```

## Configuração do Ambiente de Teste

O projeto utiliza um banco de dados de teste separado para os testes. As variáveis de ambiente para testes são carregadas do arquivo `.env.test`.

Para configurar o ambiente de teste:

1. Crie um arquivo `.env.test` na raiz do projeto
2. Configure as variáveis de ambiente para o ambiente de teste:

```
NODE_ENV=test
PORT=3001
JWT_SECRET=test_secret
DATABASE_URL=postgresql://usuario:senha@localhost:5432/mapa_racismo_test
```

## Melhores Práticas

- Escreva testes para cada nova funcionalidade
- Mantenha os testes simples e focados
- Use mocks para isolar o código que está sendo testado
- Evite dependências entre testes
- Mantenha uma boa cobertura de testes (mínimo de 80%)
- Execute os testes regularmente durante o desenvolvimento
