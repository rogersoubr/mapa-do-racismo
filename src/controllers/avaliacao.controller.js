import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const avaliacaoController = {

  async listarAvaliacoes(req, res){
    try {
      const avaliacoes = await prisma.avaliacao.findMany({
        include: {
          tipoRacismo: true
        }
      });
      res.json(avaliacoes);
    } catch (error) {
      console.error('Erro ao listar avaliações:', error);
      res.status(500).json({ error: 'Erro ao buscar avaliações' });
    }
  },


  async criarAvaliacao(req, res) {
    try {
      const { usuario, comentario, nota, tipoRacismoId } = req.body;

      // Validação
      if (!usuario || !comentario || nota === undefined || !tipoRacismoId) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      if (isNaN(nota) || nota < 1 || nota > 5) {
        return res.status(400).json({ error: 'A nota deve ser um número entre 1 e 5' });
      }

      // Verificar se o tipo de racismo existe
      const tipoRacismo = await prisma.tipoRacismo.findUnique({
        where: { id: parseInt(tipoRacismoId) }
      });

      if (!tipoRacismo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }

      const novaAvaliacao = await prisma.avaliacao.create({
        data: {
          usuario,
          comentario,
          nota: Number(nota),
          tipoRacismoId: parseInt(tipoRacismoId)
        },
        include: {
          tipoRacismo: true
        }
      });

      res.status(201).json(novaAvaliacao);
    } catch (error) {
      console.error('Erro ao criar avaliação:', error);
      res.status(500).json({ error: 'Erro ao criar avaliação', details: error.message });
    }
  },

  async buscarAvaliacaoPorId(req, res){
    try {
      const { id } = req.params;
      const avaliacao = await prisma.avaliacao.findUnique({
        where: { id: parseInt(id) },
        include: {
          tipoRacismo: true
        }
      });

      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      res.json(avaliacao);
    } catch (error) {
      console.error('Erro ao buscar avaliação:', error);
      res.status(500).json({ error: 'Erro ao buscar avaliação' });
    }
  },


  async atualizarAvaliacao(req, res){
    try {
      const { id } = req.params;
      const { usuario, comentario, nota, tipoRacismoId } = req.body;

      // Verificar se a avaliação existe
      const avaliacaoExistente = await prisma.avaliacao.findUnique({
        where: { id: parseInt(id) }
      });

      if (!avaliacaoExistente) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      // Verificar se o tipo de racismo existe
      if (tipoRacismoId) {
        const tipoRacismo = await prisma.tipoRacismo.findUnique({
          where: { id: parseInt(tipoRacismoId) }
        });

        if (!tipoRacismo) {
          return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
        }
      }

      const dadosAtualizacao = {};
      if (usuario) dadosAtualizacao.usuario = usuario;
      if (comentario) dadosAtualizacao.comentario = comentario;
      if (nota !== undefined) dadosAtualizacao.nota = Number(nota);
      if (tipoRacismoId) dadosAtualizacao.tipoRacismoId = parseInt(tipoRacismoId);

      const avaliacaoAtualizada = await prisma.avaliacao.update({
        where: { id: parseInt(id) },
        data: dadosAtualizacao,
        include: {
          tipoRacismo: true
        }
      });

      res.json(avaliacaoAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar avaliação:', error);
      res.status(500).json({ error: 'Erro ao atualizar avaliação', details: error.message });
    }
  },


  async deletarAvaliacao(req, res) {
    try {
      const { id } = req.params;

      // Verificar se a avaliação existe
      const avaliacao = await prisma.avaliacao.findUnique({
        where: { id: parseInt(id) }
      });

      if (!avaliacao) {
        return res.status(404).json({ error: 'Avaliação não encontrada' });
      }

      await prisma.avaliacao.delete({
        where: { id: parseInt(id) }
      });

      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar avaliação:', error);
      res.status(500).json({ error: 'Erro ao deletar avaliação', details: error.message });
    }
  },


}

export default avaliacaoController;









