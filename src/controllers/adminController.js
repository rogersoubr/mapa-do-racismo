import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Função para criar hash da senha
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

export const adminController = {
  // Criar um novo admin
  async create(req, res) {
    try {
      const { nome, email, senha } = req.body;

      // Validação
      if (!nome || !email || !senha) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      // Verificar se o email já está em uso
      const adminExistente = await prisma.admin.findUnique({
        where: { email }
      });

      if (adminExistente) {
        return res.status(400).json({ error: 'Este email já está em uso' });
      }

      // Criar hash da senha
      const senhaHash = await hashPassword(senha);

      // Criar o admin
      const admin = await prisma.admin.create({
        data: {
          nome,
          email,
          senha: senhaHash
        },
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
          updatedAt: true
        }
      });

      res.status(201).json(admin);
    } catch (error) {
      console.error('Erro ao criar admin:', error);
      res.status(500).json({ 
        error: 'Erro ao criar administrador',
        details: error.message 
      });
    }
  },

  // Listar todos os admins
  async findAll(req, res) {
    try {
      const admins = await prisma.admin.findMany({
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
          updatedAt: true
        },
        orderBy: {
          nome: 'asc'
        }
      });
      
      res.json(admins);
    } catch (error) {
      console.error('Erro ao listar admins:', error);
      res.status(500).json({ 
        error: 'Erro ao buscar administradores',
        details: error.message 
      });
    }
  },

  // Buscar admin por ID
  async findOne(req, res) {
    try {
      const { id } = req.params;
      
      const admin = await prisma.admin.findUnique({
        where: { id: parseInt(id) },
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
          updatedAt: true
        }
      });

      if (!admin) {
        return res.status(404).json({ error: 'Administrador não encontrado' });
      }

      res.json(admin);
    } catch (error) {
      console.error('Erro ao buscar admin:', error);
      res.status(500).json({ 
        error: 'Erro ao buscar administrador',
        details: error.message 
      });
    }
  },

  // Atualizar admin
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, email, senha } = req.body;

      // Verificar se o admin existe
      const adminExistente = await prisma.admin.findUnique({
        where: { id: parseInt(id) }
      });

      if (!adminExistente) {
        return res.status(404).json({ error: 'Administrador não encontrado' });
      }

      // Verificar se o novo email já está em uso
      if (email && email !== adminExistente.email) {
        const emailEmUso = await prisma.admin.findUnique({
          where: { email }
        });

        if (emailEmUso) {
          return res.status(400).json({ error: 'Este email já está em uso' });
        }
      }


      const dadosAtualizacao = {};
      if (nome) dadosAtualizacao.nome = nome;
      if (email) dadosAtualizacao.email = email;
      
      // Se uma nova senha foi fornecida, criar hash
      if (senha) {
        dadosAtualizacao.senha = await hashPassword(senha);
      }

      const adminAtualizado = await prisma.admin.update({
        where: { id: parseInt(id) },
        data: dadosAtualizacao,
        select: {
          id: true,
          nome: true,
          email: true,
          createdAt: true,
          updatedAt: true
        }
      });

      res.json({
        message: 'Administrador atualizado com sucesso',
        admin: adminAtualizado
      });
    } catch (error) {
      console.error('Erro ao atualizar admin:', error);
      res.status(500).json({ 
        error: 'Erro ao atualizar administrador',
        details: error.message 
      });
    }
  },

  // Deletar admin
  async delete(req, res) {
    try {
      const { id } = req.params;

      // Verificar se o admin existe
      const admin = await prisma.admin.findUnique({
        where: { id: parseInt(id) }
      });

      if (!admin) {
        return res.status(404).json({ error: 'Administrador não encontrado' });
      }

      // Não permitir que o admin se delete
      if (req.user && req.user.id === parseInt(id)) {
        return res.status(400).json({ error: 'Você não pode remover seu próprio usuário' });
      }

      await prisma.admin.delete({
        where: { id: parseInt(id) }
      });

      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar admin:', error);
      res.status(500).json({ 
        error: 'Erro ao excluir administrador',
        details: error.message 
      });
    }
  },

  // Login de admin
  async login(req, res) {
    try {
      const { email, senha } = req.body;

      // Validação
      if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios' });
      }

      // Buscar admin pelo email
      const admin = await prisma.admin.findUnique({
        where: { email }
      });

      if (!admin) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Verificar senha
      const senhaValida = await bcrypt.compare(senha, admin.senha);

      if (!senhaValida) {
        return res.status(401).json({ error: 'Credenciais inválidas' });
      }

      // Aqui você pode gerar um token JWT se estiver usando autenticação
      // const token = gerarToken({ id: admin.id, email: admin.email });

      res.json({
        message: 'Login realizado com sucesso',
        // token,
        admin: {
          id: admin.id,
          nome: admin.nome,
          email: admin.email
        }
      });
    } catch (error) {
      console.error('Erro no login:', error);
      res.status(500).json({ 
        error: 'Erro ao realizar login',
        details: error.message 
      });
    }
  }
};

export default adminController;
