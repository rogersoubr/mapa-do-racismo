import request from 'supertest';
import app from '../index.js';
import '../test-utils/test-setup.js';

describe('Tipos de Racismo', () => {
  let tipoId;

  it('GET /api/tipos-racismo deve retornar lista', async () => {
    const res = await request(app).get('/api/tipos-racismo');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/tipos-racismo deve criar novo tipo', async () => {
    const res = await request(app)
      .post('/api/tipos-racismo')
      .send({ descricao: 'Teste Jest' });
    expect(res.statusCode).toBe(201);
    expect(res.body.descricao).toBe('Teste Jest');
    tipoId = res.body.id;
  });

  it('GET /api/tipos-racismo/:id deve retornar o tipo criado', async () => {
    const res = await request(app).get(`/api/tipos-racismo/${tipoId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(tipoId);
  });

  it('PUT /api/tipos-racismo/:id deve atualizar o tipo', async () => {
    const res = await request(app)
      .put(`/api/tipos-racismo/${tipoId}`)
      .send({ descricao: 'Atualizado Jest' });
    expect(res.statusCode).toBe(200);
    expect(res.body.descricao).toBe('Atualizado Jest');
  });

  it('DELETE /api/tipos-racismo/:id deve remover o tipo', async () => {
    const res = await request(app).delete(`/api/tipos-racismo/${tipoId}`);
    expect(res.statusCode).toBe(204);
  });
});

describe('Localizacoes', () => {
  let localizacaoId;

  it('GET /api/localizacoes deve retornar lista', async () => {
    const res = await request(app).get('/api/localizacoes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('POST /api/localizacoes deve criar nova localização', async () => {
    const resTipo = await request(app).post('/api/tipos-racismo').send({ descricao: 'Para Localizacao' });
    const tipoId = resTipo.body.id;
    const res = await request(app)
      .post('/api/localizacoes')
      .send({
        nome: 'Teste Localizacao',
        descricao: 'Descrição teste',
        bairro: 'Centro',
        rua: 'Rua Teste',
        latitude: -23.5,
        longitude: -46.6,
        tipoRacismoId: tipoId
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.nome).toBe('Teste Localizacao');
    localizacaoId = res.body.id;
  });

  it('GET /api/localizacoes/:id deve retornar localização', async () => {
    const res = await request(app).get(`/api/localizacoes/${localizacaoId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(localizacaoId);
  });

  it('PUT /api/localizacoes/:id deve atualizar localização', async () => {
    const res = await request(app)
      .put(`/api/localizacoes/${localizacaoId}`)
      .send({ descricao: 'Atualizada' });
    expect(res.statusCode).toBe(200);
    expect(res.body.descricao).toBe('Atualizada');
  });

  it('DELETE /api/localizacoes/:id deve remover localização', async () => {
    const res = await request(app).delete(`/api/localizacoes/${localizacaoId}`);
    expect(res.statusCode).toBe(204);
  });
});

describe('Respostas', () => {
  let respostaId, localizacaoId;

  beforeAll(async () => {
    const resTipo = await request(app).post('/api/tipos-racismo').send({ descricao: 'Para Resposta' });
    const tipoId = resTipo.body.id;
    const resLoc = await request(app).post('/api/localizacoes').send({
      nome: 'Loc para Resposta',
      descricao: 'desc',
      bairro: 'bairro',
      rua: 'rua',
      latitude: -23.5,
      longitude: -46.6,
      tipoRacismoId: tipoId
    });
    localizacaoId = resLoc.body.id;
  });

  it('POST /api/respostas deve criar resposta', async () => {
    const res = await request(app)
      .post('/api/respostas')
      .send({
        comentario: 'Comentário Teste',
        usuario: 'Usuário Teste',
        localizacaoId
      });
    expect(res.statusCode).toBe(201);
    respostaId = res.body.id;
  });

  it('GET /api/respostas deve retornar lista', async () => {
    const res = await request(app).get('/api/respostas');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('DELETE /api/respostas/:id deve remover resposta', async () => {
    const res = await request(app).delete(`/api/respostas/${respostaId}`);
    expect(res.statusCode).toBe(204);
  });
});

describe('Avaliacoes', () => {
  let avaliacaoId, tipoId;

  beforeAll(async () => {
    const resTipo = await request(app).post('/api/tipos-racismo').send({ descricao: 'Para Avaliacao' });
    tipoId = resTipo.body.id;
  });

  it('POST /api/avaliacoes deve criar avaliação', async () => {
    const res = await request(app)
      .post('/api/avaliacoes')
      .send({
        usuario: 'Usuário Avaliador',
        comentario: 'Comentário Avaliador',
        nota: 4,
        tipoRacismoId: tipoId
      });
    expect(res.statusCode).toBe(201);
    avaliacaoId = res.body.id;
  });

  it('GET /api/avaliacoes deve retornar lista', async () => {
    const res = await request(app).get('/api/avaliacoes');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('DELETE /api/avaliacoes/:id deve remover avaliação', async () => {
    const res = await request(app).delete(`/api/avaliacoes/${avaliacaoId}`);
    expect(res.statusCode).toBe(204);
  });
});

describe('Denuncias', () => {
  let denunciaId;

  it('POST /api/denuncia deve criar denúncia', async () => {
    const res = await request(app)
      .post('/api/denuncia')
      .send({
        descricao: 'Denúncia de injúria racial',
        localizacao: 'Praça Central'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.descricao).toBe('Denúncia de injúria racial');
    denunciaId = res.body.id;
  });

  it('GET /api/denuncia deve retornar lista', async () => {
    const res = await request(app).get('/api/denuncia');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/denuncia/:id deve retornar denúncia', async () => {
    const res = await request(app).get(`/api/denuncia/${denunciaId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(denunciaId);
  });

  it('PUT /api/denuncia/:id deve atualizar denúncia', async () => {
    const res = await request(app)
      .put(`/api/denuncia/${denunciaId}`)
      .send({
        descricao: 'Denúncia atualizada',
        localizacao: 'Prefeitura'
      });
    expect(res.statusCode).toBe(200);
    expect(res.body.descricao).toBe('Denúncia atualizada');
  });

  it('DELETE /api/denuncia/:id deve remover denúncia', async () => {
    const res = await request(app).delete(`/api/denuncia/${denunciaId}`);
    expect(res.statusCode).toBe(204);
  });
});

describe('Ocorrencias', () => {
  let ocorrenciaId, localizacaoId, tipoRacismoId;

  beforeAll(async () => {
    // Cria um tipo de racismo e uma localização para usar na ocorrência
    const resTipo = await request(app).post('/api/tipos-racismo').send({ descricao: 'Para Ocorrencia' });
    tipoRacismoId = resTipo.body.id;

    const resLoc = await request(app).post('/api/localizacoes').send({
      nome: 'Loc para Ocorrencia',
      descricao: 'desc',
      bairro: 'bairro',
      rua: 'rua',
      latitude: -23.5,
      longitude: -46.6,
      tipoRacismoId
    });
    localizacaoId = resLoc.body.id;
  });

  it('POST /api/ocorrencias deve criar ocorrência', async () => {
    const res = await request(app)
      .post('/api/ocorrencias')
      .send({
        descricao: 'Ocorrência Teste',
        localizacaoId,
        tipoRacismoId,
        status: 'aberta'
      });
    expect(res.statusCode).toBe(201);
    expect(res.body.descricao).toBe('Ocorrência Teste');
    ocorrenciaId = res.body.id;
  });

  it('GET /api/ocorrencias deve retornar lista', async () => {
    const res = await request(app).get('/api/ocorrencias');
    expect(res.statusCode).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it('GET /api/ocorrencias/:id deve retornar ocorrência', async () => {
    const res = await request(app).get(`/api/ocorrencias/${ocorrenciaId}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.id).toBe(ocorrenciaId);
  });

  it('PUT /api/ocorrencias/:id deve atualizar ocorrência', async () => {
    const res = await request(app)
      .put(`/api/ocorrencias/${ocorrenciaId}`)
      .send({ descricao: 'Ocorrência Atualizada' });
    expect(res.statusCode).toBe(200);
    expect(res.body.descricao).toBe('Ocorrência Atualizada');
  });

  it('DELETE /api/ocorrencias/:id deve remover ocorrência', async () => {
    const res = await request(app).delete(`/api/ocorrencias/${ocorrenciaId}`);
    expect(res.statusCode).toBe(204);
  });
});

