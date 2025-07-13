const { Request, Response } = require("express");
const prisma = require("../prisma");

class UserController {
  async getUser(req, res) {
    try {
      const users = await prisma.user.findMany({
        select: {
          id: true,
          email: true,
          role: true,
          createdAt: true,
          updatedAt: true,
        },
      });

      res.status(200).json({ users });
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      res.status(500).json({ error: "Erro interno do sistema" });
    }
  }

  async stats(req, res) {
    try {
      const totalUsers = await prisma.user.count();
      const adminUsers = await prisma.user.count({ where: { role: "ADMIN" } });
      const regularUsers = await prisma.user.count({ where: { role: "USER" } });

      const stats = {
        totalUsers,
        adminUsers,
        regularUsers,
      };

      res.status(200).json({ stats });
    } catch (error) {
      console.error("Erro ao buscar estatísticas: ", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }

  async deleteUserById(req, res) {
    try {
      const { id } = req.params;

      if (req.user?.id === id) {
        return res
          .status(400)
          .json({ error: "Não é possível deletar a sí mesmo. Procure ajuda!" });
      }

      await prisma.user.delete({
        where: { id },
      });

      res.status(200).json({ message: "Usuário deletado com sucesso!" });
    } catch (error) {
      console.error("Erro ao deletar usuário: ", error);
      res.status(500).json({ error: "Erro interno do servidor" });
    }
  }
}

module.exports = new UserController();