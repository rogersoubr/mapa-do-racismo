// Importando o pacote 'supertest' para fazer requisições HTTP para o app Express
import request from 'supertest';
// Importando o app Express configurado
import app from '../app'; 

// Descrevendo os testes para as operações CRUD de Admin
describe('CRUD de Admins', () => {
  // Teste para verificar a criação de um novo Admin
  it('deve criar um novo admin', async () => {
    // Enviando uma requisição POST para a rota '/admins' com os dados do admin
    const res = await request(app)
      .post('/admins')
      .send({ nome: 'Admin Teste', email: 'admin@teste.com', senha: '123456' });
    
    // Verificando se a resposta tem status 201 (Criado)
    expect(res.statusCode).toEqual(201);
    // Verificando se a resposta contém a propriedade 'id', o que indica que o admin foi criado
    expect(res.body).toHaveProperty('id');
  });
});
