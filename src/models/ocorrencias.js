import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Ocorrencia = {
  async criar(data) {
    return await prisma.ocorrencia.create({
      data,
    });
  },

  async listar() {
    return await prisma.ocorrencia.findMany({
      include: {
        localizacao: true,
        tipoRacismo: true,
        respostas: true,
        avaliacoes: true,
      },
    });
  },

  async atualizar(id, data) {
    return await prisma.ocorrencia.update({
      where: { id },
      data,
    });
  },

  async remover(id) {
    return await prisma.ocorrencia.delete({
      where: { id },
    });
  },

  async buscarPorId(id) {
    return await prisma.ocorrencia.findUnique({
      where: { id },
      include: {
        localizacao: true,
        tipoRacismo: true,
        respostas: true,
        avaliacoes: true,
      },
    });
  },
};