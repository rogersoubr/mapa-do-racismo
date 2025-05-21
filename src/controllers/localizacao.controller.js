import { Localizacao } from '../models/localizacao.js';

export const listarLocalizacoes = async (req, res) => {
  try {
    const localizacoes = await Localizacao.listar();
    res.json(localizacoes);
  } catch (error) {
    console.error('Erro ao listar localizações:', error);
    res.status(500).json({ error: 'Erro ao listar localizações' });
  }
};

export const criarLocalizacao = async (req, res) => {
  try {
    const { nome, descricao, latitude, longitude, tipoRacismoId, bairro, rua } = req.body;
    
    if (!nome || !descricao || !latitude || !longitude || !tipoRacismoId) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    // Validando formato das coordenadas
    if (isNaN(latitude) || isNaN(longitude)) {
      return res.status(400).json({ error: 'Latitude e longitude devem ser números' });
    }

    const localizacao = await Localizacao.criar(req.body);
    res.status(201).json(localizacao);
  } catch (error) {
    console.error('Erro ao criar localização:', error);
    res.status(400).json({ error: 'Erro ao criar localização' });
  }
};

export const atualizarLocalizacao = async (req, res) => {
  try {
    const { id } = req.params;
    const localizacao = await Localizacao.atualizar(id, req.body);
    
    if (!localizacao) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }

    res.json(localizacao);
  } catch (error) {
    console.error('Erro ao atualizar localização:', error);
    res.status(400).json({ error: 'Erro ao atualizar localização' });
  }
};

export const deletarLocalizacao = async (req, res) => {
  try {
    const { id } = req.params;
    await Localizacao.deletar(id);
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar localização:', error);
    res.status(400).json({ error: 'Erro ao deletar localização' });
  }
};

export const buscarLocalizacaoPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const localizacao = await Localizacao.buscarPorId(id);
    
    if (!localizacao) {
      return res.status(404).json({ error: 'Localização não encontrada' });
    }

    res.json(localizacao);
  } catch (error) {
    console.error('Erro ao buscar localização:', error);
    res.status(400).json({ error: 'Erro ao buscar localização' });
  }
};
