import { execSync } from 'node:child_process';

// Configuração global antes de todos os testes
beforeAll(() => {
  console.log('🌱 Preparando banco de dados para testes...');
  // O NODE_ENV já está definido como 'test' pelo jest-setup.js
  execSync('npm run seed', { stdio: 'inherit' });
});

// Limpar recursos após todos os testes
afterAll(() => {
  console.log('🧹 Limpando recursos após os testes...');
  // Aqui você pode adicionar limpeza adicional se necessário
});
