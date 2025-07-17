import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const localizacaoController ={

  // Listar todas as localizações com contagem de respostas e avaliações
  async listarLocalizacoes(req, res){
    try {
      const localizacoes = await prisma.localizacao.findMany({
        include: {
          tipoRacismo: {
            select: {
              id: true,
              descricao: true
            }
          },
          _count: {
            select: {
              respostas: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });
      
      res.json(localizacoes);
    } catch (error) {
      console.error('Erro ao listar localizações:', error);
      res.status(500).json({ 
        error: 'Erro ao listar localizações',
        details: error.message 
      });
    }
  },


  // Criar uma nova localização
  async criarLocalizacao(req, res){
    try {
      const { 
        nome, 
        descricao, 
        latitude, 
        longitude, 
        tipoRacismoId, 
        bairro, 
        rua
      } = req.body;
      
      // Validação dos campos obrigatórios
      if (!nome || !descricao || !tipoRacismoId) {
        return res.status(400).json({ 
          error: 'Nome, descrição e tipo de racismo são obrigatórios' 
        });
      }


      // Verificar se o tipo de racismo existe
      const tipoRacismo = await prisma.tipoRacismo.findUnique({
        where: { id: parseInt(tipoRacismoId) }
      });

      if (!tipoRacismo) {
        return res.status(400).json({ 
          error: 'Tipo de racismo não encontrado' 
        });
      }

      // Criar a localização
      const localizacao = await prisma.localizacao.create({
        data: {
          nome: nome.trim(),
          descricao: descricao.trim(),
          latitude: latitude,
          longitude: longitude,
          bairro: bairro ? bairro.trim() : null,
          rua: rua ? rua.trim() : null,
          tipoRacismoId: parseInt(tipoRacismoId)
        },
        include: {
          tipoRacismo: {
            select: {
              id: true,
              descricao: true
            }
          },
          _count: {
            select: {
              respostas: true
            }
          }
        }
      });

      res.status(201).json(localizacao);
    } catch (error) {
      console.error('Erro ao criar localização:', error);
      res.status(500).json({ 
        error: 'Erro ao criar localização',
        details: error.message 
      });
    }
  },

  // Atualizar uma localização existente
  async atualizarLocalizacao(req, res){
    try {
      const { id } = req.params;
      const { 
        nome, 
        descricao, 
        latitude, 
        longitude, 
        tipoRacismoId, 
        bairro, 
        rua
      } = req.body;

      // Verificar se a localização existe
      const localizacaoExistente = await prisma.localizacao.findUnique({
        where: { id: parseInt(id) }
      });

      if (!localizacaoExistente) {
        return res.status(404).json({ 
          error: 'Localização não encontrada' 
        });
      }

      // Verificar se o tipo de racismo existe, se for fornecido
      if (tipoRacismoId) {
        const tipoRacismo = await prisma.tipoRacismo.findUnique({
          where: { id: parseInt(tipoRacismoId) }
        });

        if (!tipoRacismo) {
          return res.status(400).json({ 
            error: 'Tipo de racismo não encontrado' 
          });
        }
      }

      // Validar coordenadas, se fornecidas
      let lat = localizacaoExistente.latitude;
      let lng = localizacaoExistente.longitude;
      
      if (latitude !== undefined) {
        lat = parseFloat(latitude);
        if (isNaN(lat)) {
          return res.status(400).json({ 
            error: 'Latitude deve ser um número válido' 
          });
        }
      }
      
      if (longitude !== undefined) {
        lng = parseFloat(longitude);
        if (isNaN(lng)) {
          return res.status(400).json({ 
            error: 'Longitude deve ser um número válido' 
          });
        }
      }

      // Atualizar a localização
      const localizacaoAtualizada = await prisma.localizacao.update({
        where: { id: parseInt(id) },
        data: {
          nome: nome !== undefined ? nome.trim() : localizacaoExistente.nome,
          descricao: descricao !== undefined ? descricao.trim() : localizacaoExistente.descricao,
          latitude: lat,
          longitude: lng,
          bairro: bairro !== undefined ? (bairro ? bairro.trim() : null) : localizacaoExistente.bairro,
          rua: rua !== undefined ? (rua ? rua.trim() : null) : localizacaoExistente.rua,
          tipoRacismoId: tipoRacismoId ? parseInt(tipoRacismoId) : localizacaoExistente.tipoRacismoId
        },
        include: {
          tipoRacismo: {
            select: {
              id: true,
              descricao: true
            }
          },
          _count: {
            select: {
              respostas: true
            }
          }
        }
      });

      res.json(localizacaoAtualizada);
    } catch (error) {
      console.error('Erro ao atualizar localização:', error);
      res.status(500).json({ 
        error: 'Erro ao atualizar localização',
        details: error.message 
      });
    }
  },

  // Deletar uma localização
  async deletarLocalizacao(req, res){
    try {
      const { id } = req.params;

      // Verificar se a localização existe
      const localizacao = await prisma.localizacao.findUnique({
        where: { id: parseInt(id) },
        include: {
          _count: {
            select: {
              respostas: true
            }
          }
        }
      });

      if (!localizacao) {
        return res.status(404).json({ 
          error: 'Localização não encontrada' 
        });
      }


      // Excluir a localização (as relações em cascata serão tratadas pelo Prisma)
      await prisma.localizacao.delete({
        where: { id: parseInt(id) }
      });

      res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar localização:', error);
      res.status(500).json({ 
        error: 'Erro ao deletar localização',
        details: error.message 
      });
    }
  },

  // Buscar uma localização por ID
  async buscarLocalizacaoPorId(req, res){
    try {
      const { id } = req.params;

      const localizacao = await prisma.localizacao.findUnique({
        where: { id: parseInt(id) },
        include: {
          tipoRacismo: {
            select: {
              id: true,
              descricao: true
            }
          },
          respostas: {
            orderBy: {
              createdAt: 'desc'
            }
          },
          _count: {
            select: {
              respostas: true
            }
          }
        }
      });
      
      if (!localizacao) {
        return res.status(404).json({ 
          error: 'Localização não encontrada' 
        });
      }
      
      res.json(localizacao);
    } catch (error) {
      console.error('Erro ao buscar localização:', error);
      res.status(500).json({ 
        error: 'Erro ao buscar localização',
        details: error.message 
      });
    }
  },

  // Buscar localizações por tipo de racismo
  async buscarLocalizacoesPorTipo(req, res){
    try {
      const { tipoRacismoId } = req.params;

      const localizacoes = await prisma.localizacao.findMany({
        where: { 
          tipoRacismoId: parseInt(tipoRacismoId) 
        },
        include: {
          tipoRacismo: {
            select: {
              id: true,
              descricao: true
            }
          },
          _count: {
            select: {
              respostas: true
            }
          }
        },
        orderBy: {
          createdAt: 'desc'
        }
      });

      res.json(localizacoes);
    } catch (error) {
      console.error('Erro ao buscar localizações por tipo de racismo:', error);
      res.status(500).json({ 
        error: 'Erro ao buscar localizações por tipo de racismo',
        details: error.message 
      });
    }
  },


}

export default localizacaoController;

