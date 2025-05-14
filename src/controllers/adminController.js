// Importando o modelo Admin para interagir com o banco de dados
import { Admin } from '../models';

export default {
  // Função para criar um novo Admin
  async create(req, res) {
    try {
      // Desestruturando os dados enviados no corpo da requisição
      const { nome, email, senha } = req.body;
      // Criando um novo admin no banco de dados
      const admin = await Admin.create({ nome, email, senha });
      // Retornando o admin criado com o status 201 (Criado)
      res.status(201).json(admin);
    } catch (error) {
      // Se ocorrer um erro, retorna o status 400 e a mensagem de erro
      res.status(400).json({ error: error.message });
    }
  },

  // Função para obter todos os Admins
  async findAll(req, res) {
    try {
      // Buscando todos os admins no banco de dados
      const admins = await Admin.findAll();
      // Retornando todos os admins encontrados
      res.json(admins);
    } catch (error) {
      // Se ocorrer um erro, retorna o status 500 e a mensagem de erro
      res.status(500).json({ error: error.message });
    }
  },

  // Função para obter um Admin pelo ID
  async findOne(req, res) {
    try {
      // Buscando um admin no banco de dados pelo ID fornecido na URL
      const admin = await Admin.findByPk(req.params.id);
      // Se o admin não for encontrado, retorna o status 404 e mensagem de erro
      if (!admin) return res.status(404).json({ error: "Admin não encontrado" });
      // Retorna o admin encontrado
      res.json(admin);
    } catch (error) {
      // Se ocorrer um erro, retorna o status 500 e a mensagem de erro
      res.status(500).json({ error: error.message });
    }
  },

  // Função para atualizar um Admin pelo ID
  async update(req, res) {
    try {
      // Desestruturando os dados enviados no corpo da requisição
      const { nome, email, senha } = req.body;
      // Atualizando o admin no banco de dados
      const [updated] = await Admin.update({ nome, email, senha }, {
        where: { id: req.params.id } // Condição para atualizar o admin com o ID fornecido na URL
      });
      // Se nenhum admin foi atualizado, retorna o status 404 e mensagem de erro
      if (!updated) return res.status(404).json({ error: "Admin não encontrado" });
      // Retorna uma mensagem de sucesso
      res.json({ message: "Admin atualizado com sucesso" });
    } catch (error) {
      // Se ocorrer um erro, retorna o status 400 e a mensagem de erro
      res.status(400).json({ error: error.message });
    }
  },

  // Função para excluir um Admin pelo ID
  async delete(req, res) {
    try {
      // Excluindo o admin no banco de dados
      const deleted = await Admin.destroy({
        where: { id: req.params.id } // Condição para excluir o admin com o ID fornecido na URL
      });
      // Se o admin não for encontrado para exclusão, retorna o status 404 e mensagem de erro
      if (!deleted) return res.status(404).json({ error: "Admin não encontrado" });
      // Retorna uma mensagem de sucesso
      res.json({ message: "Admin excluído com sucesso" });
    } catch (error) {
      // Se ocorrer um erro, retorna o status 500 e a mensagem de erro
      res.status(500).json({ error: error.message });
    }
  }
};
