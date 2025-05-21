import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const TipoRacismo = {
  async listar() {
    return await prisma.tipoRacismo.findMany({
      orderBy: {
        createdAt: 'asc'
      }
    });
  },

  async criar(dados) {
    return await prisma.tipoRacismo.create({
      data: {
        descricao: dados.descricao
      }
    });
  },

  async atualizar(id, dados) {
    return await prisma.tipoRacismo.update({
      where: { id },
      data: {
        descricao: dados.descricao
      }
    });
  },

  async deletar(id) {
    return await prisma.tipoRacismo.delete({
      where: { id }
    });
  },

  async buscarPorId(id) {
    return await prisma.tipoRacismo.findUnique({
      where: { id }
    });
  },

  async buscarPorDescricao(descricao) {
    return await prisma.tipoRacismo.findUnique({
      where: { descricao }
    });
  }
};

export default TipoRacismo;