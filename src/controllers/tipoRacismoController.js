import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const tipoRacismoController = {
  // Listar todos os tipos de racismo
  async index(req, res) {
    try {
      const tipos = await prisma.tipoRacismo.findMany({
        orderBy: {
          descricao: 'asc'
        },
        include: {
          _count: {
            select: {
              localizacoes: true,
              avaliacoes: true
            }
          }
        }
      });
      
      return res.json(tipos);
    } catch (error) {
      console.error('Erro ao listar tipos de racismo:', error);
      return res.status(500).json({ 
        error: 'Erro ao listar tipos de racismo',
        details: error.message 
      });
    }
  },

  // Obter um tipo de racismo por ID
  async show(req, res) {
    try {
      const { id } = req.params;
      
      const tipo = await prisma.tipoRacismo.findUnique({
        where: { id: parseInt(id) },
        include: {
          _count: {
            select: {
              localizacoes: true,
              avaliacoes: true
            }
          }
        }
      });
      
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }
      
      return res.json(tipo);
    } catch (error) {
      console.error('Erro ao buscar tipo de racismo:', error);
      return res.status(500).json({ 
        error: 'Erro ao buscar tipo de racismo',
        details: error.message 
      });
    }
  },

  // Criar um novo tipo de racismo
  async store(req, res) {
    try {
      const { descricao } = req.body;
      
      // Validação
      if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
        return res.status(400).json({ 
          error: 'Descrição é obrigatória e deve ser um texto válido' 
        });
      }

      // Verificar se já existe tipo com a mesma descrição (case insensitive)
      const tipoExistente = await prisma.tipoRacismo.findFirst({
        where: {
          descricao: {
            equals: descricao.trim(),
            mode: 'insensitive'
          }
        }
      });

      if (tipoExistente) {
        return res.status(400).json({ 
          error: 'Já existe um tipo de racismo com esta descrição' 
        });
      }
      
      // Criar o novo tipo
      const novoTipo = await prisma.tipoRacismo.create({
        data: {
          descricao: descricao.trim()
        },
        include: {
          _count: {
            select: {
              localizacoes: true,
              avaliacoes: true
            }
          }
        }
      });
      
      return res.status(201).json(novoTipo);
    } catch (error) {
      console.error('Erro ao criar tipo de racismo:', error);
      return res.status(500).json({ 
        error: 'Erro ao criar tipo de racismo',
        details: error.message 
      });
    }
  },

  // Atualizar um tipo de racismo
  async update(req, res) {
    try {
      const { id } = req.params;
      const { descricao } = req.body;
      
      // Validação
      if (!descricao || typeof descricao !== 'string' || descricao.trim() === '') {
        return res.status(400).json({ 
          error: 'Descrição é obrigatória e deve ser um texto válido' 
        });
      }

      // Verificar se o tipo existe
      const tipoExistente = await prisma.tipoRacismo.findUnique({
        where: { id: parseInt(id) }
      });

      if (!tipoExistente) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }

      // Verificar se já existe outro tipo com a mesma descrição (case insensitive)
      const tipoComMesmaDescricao = await prisma.tipoRacismo.findFirst({
        where: {
          id: { not: parseInt(id) },
          descricao: {
            equals: descricao.trim(),
            mode: 'insensitive'
          }
        }
      });

      if (tipoComMesmaDescricao) {
        return res.status(400).json({ 
          error: 'Já existe outro tipo de racismo com esta descrição' 
        });
      }

      // Atualizar o tipo
      const tipoAtualizado = await prisma.tipoRacismo.update({
        where: { id: parseInt(id) },
        data: {
          descricao: descricao.trim()
        },
        include: {
          _count: {
            select: {
              localizacoes: true,
              avaliacoes: true
            }
          }
        }
      });
      
      return res.json(tipoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar tipo de racismo:', error);
      return res.status(500).json({ 
        error: 'Erro ao atualizar tipo de racismo',
        details: error.message 
      });
    }
  },

  // Deletar um tipo de racismo
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      // Verificar se o tipo existe
      const tipo = await prisma.tipoRacismo.findUnique({
        where: { id: parseInt(id) },
        include: {
          _count: {
            select: {
              localizacoes: true,
              avaliacoes: true
            }
          }
        }
      });
      
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }

      // Verificar se existem localizações ou avaliações vinculadas
      if (tipo._count.localizacoes > 0 || tipo._count.avaliacoes > 0) {
        return res.status(400).json({ 
          error: 'Não é possível excluir este tipo de racismo pois existem registros vinculados a ele' 
        });
      }

      // Excluir o tipo
      await prisma.tipoRacismo.delete({
        where: { id: parseInt(id) }
      });
      
      return res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar tipo de racismo:', error);
      return res.status(500).json({ 
        error: 'Erro ao deletar tipo de racismo',
        details: error.message 
      });
    }
  }
};

export default tipoRacismoController;