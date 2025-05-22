// Configuração para carregar o arquivo .env.test automaticamente
import dotenv from 'dotenv';

// Forçar o uso do arquivo .env.test para os testes
process.env.NODE_ENV = 'test';

// Carregar as variáveis de ambiente do arquivo .env.test
dotenv.config({ path: '.env.test' });

// Log para confirmar que as variáveis foram carregadas corretamente
console.log('🧪 Ambiente de teste configurado com .env.test');
console.log(`🔑 DATABASE_URL: ${process.env.DATABASE_URL ? '*** (definida)' : 'não definida'}`);
