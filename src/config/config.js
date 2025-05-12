// Configuração do ambiente usando dotenv para carregar variáveis de ambiente do arquivo .env
import dotenv from 'dotenv';

// Carrega as variáveis de ambiente do arquivo .env
dotenv.config();

// Configurações do banco de dados para diferentes ambientes
export default {
  // Configurações para ambiente de desenvolvimento
  development: {
    username: process.env.DB_USER || 'root',        // Usuário do banco de dados
    password: process.env.DB_PASSWORD || '',        // Senha do banco de dados
    database: process.env.DB_NAME || 'mapa_racismo', // Nome do banco de dados
    dialect: 'sqlite',                             // Tipo de banco de dados (SQLite)
    storage: './src/data/base.db',                 // Localização do arquivo do banco SQLite
    logging: console.log,                           // Habilita logs das consultas SQL no console
  },
  
  // Configurações para ambiente de teste
  test: {
    username: process.env.DB_TEST_USER || 'root',
    password: process.env.DB_TEST_PASSWORD || '',
    database: process.env.DB_TEST_NAME || 'mapa_racismo_test',
    host: process.env.DB_TEST_HOST || '127.0.0.1',
    dialect: 'sqlite',
    storage: ':memory:',  // Usa banco de dados em memória para testes
  },
  
  // Configurações para ambiente de produção
  production: {
    username: process.env.DB_USER || 'root',        // Usuário do banco de dados
    password: process.env.DB_PASSWORD || '',        // Senha do banco de dados
    database: process.env.DB_NAME || 'mapa_racismo_prod', // Nome do banco de dados em produção
    dialect: 'sqlite',                             // Usando SQLite3 em produção também
    storage: './src/data/base.db',                 // Arquivo do banco de dados de produção
    logging: false                                 // Desabilita logs em produção para melhor performance
  }
};

// Verifica se todas as variáveis de ambiente necessárias estão definidas
const requiredEnvVars = ['DB_NAME', 'DB_USER', 'DB_PASSWORD', 'DB_HOST'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

// Se estiver em produção e faltar alguma variável de ambiente, encerra a aplicação
if (missingVars.length > 0 && process.env.NODE_ENV === 'production') {
  console.error(`Erro: As seguintes variáveis de ambiente são necessárias: ${missingVars.join(', ')}`);
  process.exit(1);
}

// jair filho
