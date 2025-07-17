import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const respostaController = {

  async listarRespostas(req, res){
    try {
      const respostas = await prisma.resposta.findMany({
        include: {
          localizacao: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      res.json(respostas);
    } catch (error) {
      console.error('Erro ao listar respostas:', error);
      res.status(500).json({ error: 'Erro ao listar respostas', details: error.message });
    }
  },


    async criarResposta(req, res){
    try {
      const { comentario, usuario, localizacaoId } = req.body;
      
      // Validação
      if (!comentario || !usuario || !localizacaoId) {
        return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
      }

      // Verificar se a localização existe
      const localizacao = await prisma.localizacao.findUnique({
        where: { id: localizacaoId }
      });

      if (!localizacao) {
        return res.status(404).json({ error: 'Localização não encontrada' });
      }

      const resposta = await prisma.resposta.create({
        data: {
          comentario,
          usuario,
          localizacaoId: parseInt(localizacaoId)
        },
        include: {
          localizacao: true
        }
      });

      res.status(201).json(resposta);
    } catch (error) {
      console.error('Erro ao criar resposta:', error);
      res.status(400).json({ 
        error: 'Erro ao criar resposta', 
        details: error.message 
      });
    }
  },


  async buscarRespostaPorId(req, res){
    try {
      const { id } = req.params;
      
      const resposta = await prisma.resposta.findUnique({
        where: {
          id
        },
        include: {
          localizacao: true
        }
      });
      
      if (!resposta) {
        return res.status(404).json({ error: 'Resposta não encontrada' });
      }

      res.json(resposta);
    } catch (error) {
      console.error('Erro ao buscar resposta:', error);
      res.status(500).json({ 
        error: 'Erro ao buscar resposta',
        details: error.message
      });
    }
  },


  async atualizarResposta(req, res){
    try {
      const { id } = req.params;
      const { comentario, usuario } = req.body;

      // Verificar se a resposta existe
      const respostaExistente = await prisma.resposta.findUnique({
        where: { id }
      });

      if (!respostaExistente) {
        return res.status(404).json({ error: 'Resposta não encontrada' });
      }

      const dadosAtualizacao = {};
      if (comentario) dadosAtualizacao.comentario = comentario;
      if (usuario) dadosAtualizacao.usuario = usuario;

      const respostaAtualizada = await prisma.resposta.update({
        where: { id },
        data: dadosAtualizacao,
        include: {
          localizacao: true
        }
      });

      res.json(respostaAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar resposta:', error);
      res.status(500).json({ 
        error: 'Erro ao atualizar resposta',
        details: error.message
      });
    }
  },


    async deletarResposta(req, res){
      try {
        const { id } = req.params;

        // Verificar se a resposta existe
        const resposta = await prisma.resposta.findUnique({
          where: { id }
        });

        if (!resposta) {
          return res.status(404).json({ error: 'Resposta não encontrada' });
        }

        await prisma.resposta.delete({
          where: { id }
        });

        res.status(204).send();
      } catch (error) {
        console.error('Erro ao deletar resposta:', error);
        res.status(500).json({ 
          error: 'Erro ao deletar resposta',
          details: error.message
        });
      }
    },

    async listarRespostasPorLocalizacao(req, res){
    try {
      const { localizacaoId } = req.params;
      
      const respostas = await prisma.resposta.findMany({
        where: { localizacaoId },
        include: {
          localizacao: true
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      
      res.json(respostas);
    } catch (error) {
      console.error('Erro ao listar respostas por localização:', error);
      res.status(500).json({ 
        error: 'Erro ao listar respostas',
        details: error.message
      });
    }
  },


}

export default respostaController











