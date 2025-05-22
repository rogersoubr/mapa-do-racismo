import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Localizacao = {
  async listar() {
    return await prisma.localizacao.findMany({
      include: {
        tipoRacismo: true,
        respostas: true
      }
    });
  },

  async criar(dados) {
    return await prisma.localizacao.create({
      data: {
        nome: dados.nome,
        descricao: dados.descricao,
        bairro: dados.bairro,
        rua: dados.rua,
        latitude: dados.latitude,
        longitude: dados.longitude,
        tipoRacismoId: dados.tipoRacismoId
      }
    });
  },

  async atualizar(id, dados) {
    return await prisma.localizacao.update({
      where: { id },
      data: {
        nome: dados.nome,
        descricao: dados.descricao,
        bairro: dados.bairro,
        rua: dados.rua,
        latitude: dados.latitude,
        longitude: dados.longitude,
        tipoRacismoId: dados.tipoRacismoId
      }
    });
  },

  async deletar(id) {
    return await prisma.localizacao.delete({
      where: { id }
    });
  },

  async buscarPorId(id) {
    return await prisma.localizacao.findUnique({
      where: { id },
      include: {
        tipoRacismo: true,
        respostas: true
      }
    });
  }
};
