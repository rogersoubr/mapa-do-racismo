import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const Denuncia = {
  async criar(data) {
    return await prisma.denuncia.create({
      data,
    });
  },

  async listar() {
    return await prisma.denuncia.findMany();
  },

  async atualizar(id, data) {
    return await prisma.denuncia.update({
      where: { id },
      data,
    });
  },

  async remover(id) {
    return await prisma.denuncia.delete({
      where: { id },
    });
  },

  async buscarPorId(id) {
    return await prisma.denuncia.findUnique({
      where: { id },
    });
  },

  // Métodos adicionais podem ser incluídos aqui conforme necessidade
};