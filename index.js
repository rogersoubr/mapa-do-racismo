import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

import tipoRacismoRoutes from './src/routes/tipoRacismoRoutes.js';
import denunciaRoutes from './src/routes/denunciasRoutes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Carrega as variáveis de ambiente
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Verificação de ambiente
console.log('\n🔍 Verificando configurações do ambiente...\n');

// Verifica variáveis essenciais
const requiredEnvVars = ['JWT_SECRET', 'DB_STORAGE'];
const missingVars = requiredEnvVars.filter(varName => !process.env[varName]);

if (missingVars.length > 0) {
  console.error('❌ Variáveis de ambiente ausentes:', missingVars.join(', '));
  if (process.env.NODE_ENV === 'production') {
    console.error('💥 Erro: Variáveis obrigatórias faltando em produção!');
    process.exit(1);
  } else {
    console.warn('⚠️  Variáveis faltando em desenvolvimento. Usando valores padrão.');
  }
}

// Exibe configurações atuais
console.log('✅ Configurações do ambiente:');
console.log(`   • NODE_ENV: ${process.env.NODE_ENV || 'development (padrão)'}`);
console.log(`   • Porta: ${PORT}`);
console.log(`   • JWT_SECRET: ${process.env.JWT_SECRET ? '*** (definida)' : '❌ Não definida'}`);
console.log(`   • DB_STORAGE: ${process.env.DB_STORAGE || '❌ Não definido'}`);

// Tenta ler a configuração do banco de forma síncrona
try {
  const configPath = join(__dirname, 'src', 'config', 'config.js');
  const configContent = readFileSync(configPath, 'utf8');
  const env = process.env.NODE_ENV || 'development';
  
  // Extrai a configuração do ambiente correspondente
  const envConfigMatch = configContent.match(new RegExp(`${env}:\\s*{[^}]*}`, 's'));
  if (envConfigMatch) {
    const dbConfig = {};
    const dialectMatch = envConfigMatch[0].match(/dialect:\\s*['"]([^'"]+)['"]/);
    const storageMatch = envConfigMatch[0].match(/storage:\\s*['"]([^'"]+)['"]/);
    
    if (dialectMatch) dbConfig.dialect = dialectMatch[1];
    if (storageMatch) dbConfig.storage = storageMatch[1];
    
    console.log(`\n💾 Configuração do banco (${env}):`);
    console.log(`   • Dialeto: ${dbConfig.dialect || 'não definido'}`);
    console.log(`   • Storage: ${dbConfig.storage || 'em memória'}`);
  }
} catch (error) {
  console.warn('ℹ️  Não foi possível verificar a configuração do banco:', error.message);
}

console.log('\n🚀 Iniciando servidor...\n');

app.use(cors());
app.use(express.json());

// Importa as rotas

// Rotas
app.use('/api', tipoRacismoRoutes);
app.use('/denuncias', denunciaRoutes);

app.listen(PORT, () => {
    console.log(`✅ Servidor rodando na porta ${PORT}`);
    console.log(`🌐 Acesse: http://localhost:${PORT}`);
});

// Tratamento de erros não capturados
process.on('unhandledRejection', (reason, promise) => {
  console.error('❌ Erro não tratado:', reason);
});