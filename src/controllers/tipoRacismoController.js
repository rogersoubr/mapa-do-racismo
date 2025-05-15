import TipoRacismo from '../models/tipoRacismo.js';

export default {
  // Listar todos os tipos de racismo
  async index(req, res) {
    try {
      const tipos = await TipoRacismo.findAll({
        where: { ativo: true },
        order: [['nome', 'ASC']]
      });
      return res.json(tipos);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao listar tipos de racismo' });
    }
  },

  // Obter um tipo de racismo por ID
  async show(req, res) {
    try {
      const { id } = req.params;
      const tipo = await TipoRacismo.findByPk(id);
      
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }
      
      return res.json(tipo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao buscar tipo de racismo' });
    }
  },

  // Criar um novo tipo de racismo
  async store(req, res) {
    try {
      const { nome, descricao } = req.body;
      
      if (!nome) {
        return res.status(400).json({ error: 'Nome é obrigatório' });
      }
      
      const tipo = await TipoRacismo.create({
        nome,
        descricao,
        ativo: true
      });
      
      return res.status(201).json(tipo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao criar tipo de racismo' });
    }
  },

  // Atualizar um tipo de racismo
  async update(req, res) {
    try {
      const { id } = req.params;
      const { nome, descricao, ativo } = req.body;
      
      const tipo = await TipoRacismo.findByPk(id);
      
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }
      
      await tipo.update({
        nome,
        descricao,
        ativo
      });
      
      return res.json(tipo);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao atualizar tipo de racismo' });
    }
  },

  // Excluir um tipo de racismo (soft delete)
  async delete(req, res) {
    try {
      const { id } = req.params;
      
      const tipo = await TipoRacismo.findByPk(id);
      
      if (!tipo) {
        return res.status(404).json({ error: 'Tipo de racismo não encontrado' });
      }
      await tipo.save();
      
      return res.json({ message: 'Tipo de racismo desativado com sucesso' });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'Erro ao desativar tipo de racismo' });
    }
  }
};
