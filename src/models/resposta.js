import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Resposta = {
  async listar() {
    return await prisma.resposta.findMany({
      include: {
        localizacao: {
          include: {
            tipoRacismo: true
          }
        }
      }
    });
  },

  async criar(dados) {
    return await prisma.resposta.create({
      data: {
        comentario: dados.comentario,
        usuario: dados.usuario,
        localizacaoId: dados.localizacaoId
      }
    });
  },

  async atualizar(id, dados) {
    return await prisma.resposta.update({
      where: { id },
      data: {
        comentario: dados.comentario,
        usuario: dados.usuario,
        localizacaoId: dados.localizacaoId
      }
    });
  },

  async deletar(id) {
    return await prisma.resposta.delete({
      where: { id }
    });
  },

  async buscarPorId(id) {
    return await prisma.resposta.findUnique({
      where: { id },
      include: {
        localizacao: {
          include: {
            tipoRacismo: true
          }
        }
      }
    });
  }
};
