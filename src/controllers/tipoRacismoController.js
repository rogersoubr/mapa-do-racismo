import { TipoRacismo } from '../models/tipoRacismo.js';

export const tipoRacismoController = {
  // Listar todos os tipos de racismo
  async index(req, res) {
    try {
      const tipos = await TipoRacismo.listar();
      return res.json(tipos);
    } catch (error) {
      console.error('Erro ao listar tipos de racismo:', error);
      return res.status(500).json({ error: 'Erro ao listar tipos de racismo' });
    }
  },

  // Obter um tipo de racismo por ID
  async show(req, res) {
    try {
      const { id } = req.params;
      const tipo = await TipoRacismo.buscarPorId(parseInt(id));
      
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }
      
      return res.json(tipo);
    } catch (error) {
      console.error('Erro ao buscar tipo de racismo:', error);
      return res.status(500).json({ error: 'Erro ao buscar tipo de racismo' });
    }
  },

  // Criar um novo tipo de racismo
  async store(req, res) {
    try {
      const { descricao } = req.body;
      
      if (!descricao) {
        return res.status(400).json({ error: 'Descrição é obrigatória' });
      }

      const tipoExistente = await TipoRacismo.buscarPorDescricao(descricao);
      if (tipoExistente) {
        return res.status(400).json({ error: 'Tipo de racismo já existe' });
      }
      
      const novoTipo = await TipoRacismo.criar({ descricao });
      return res.status(201).json(novoTipo);
    } catch (error) {
      console.error('Erro ao criar tipo de racismo:', error);
      return res.status(500).json({ error: 'Erro ao criar tipo de racismo' });
    }
  },

  // Atualizar um tipo de racismo
  async update(req, res) {
    try {
      const { id } = req.params;
      const { descricao } = req.body;
      
      if (!descricao) {
        return res.status(400).json({ error: 'Descrição é obrigatória' });
      }

      const tipo = await TipoRacismo.buscarPorId(parseInt(id));
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }

      const tipoAtualizado = await TipoRacismo.atualizar(parseInt(id), { descricao });
      return res.json(tipoAtualizado);
    } catch (error) {
      console.error('Erro ao atualizar tipo de racismo:', error);
      return res.status(500).json({ error: 'Erro ao atualizar tipo de racismo' });
    }
  },

  // Deletar um tipo de racismo
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      const tipo = await TipoRacismo.buscarPorId(parseInt(id));
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }

      await TipoRacismo.deletar(parseInt(id));
      return res.status(204).send();
    } catch (error) {
      console.error('Erro ao deletar tipo de racismo:', error);
      return res.status(500).json({ error: 'Erro ao deletar tipo de racismo' });
    }
  }
};

export default tipoRacismoController;