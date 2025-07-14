import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const AdminController = {
  async listarUsuarios(req, res) {
    try {
      const usuario = await prisma.usuario.findMany({
        select: {
          id: true,
          email: true,
          regra: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      return res.status(200).json({ usuario });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
       return res.status(500).json({ error: "Erro interno do sistema" });
    }
  },

  async statusRegra(req, res) {
    try {
      const totalUsuarios = await prisma.usuario.count();
      const adminUsuarios = await prisma.usuario.count({ where: { regra: "ADMIN" } });
      const regularUsuarios = await prisma.usuario.count({ where: { regra: "USER" } });

      const status = {
        totalUsuarios,
        adminUsuarios,
        regularUsuarios,
      };

      return res.status(200).json({ status });
    } catch (error) {
      console.error("Erro ao buscar estatísticas: ", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },

  async deletarUsuario(req, res) {
    try {
      const { id } = req.params;

      if (req.usuario.id === id) {
        return res.status(400).json({ error: "Não é possível deletar a sí mesmo. Procure ajuda!" });
      }

      await prisma.usuario.delete({
        where: { id },
      });

      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar usuário: ", error);
      return res.status(500).json({ error: "Erro interno do servidor" });
    }
  },
};

export default AdminController;