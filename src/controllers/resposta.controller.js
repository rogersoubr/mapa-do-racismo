import { Resposta } from '../models/resposta.js';

export const listarRespostas = async (req, res) => {
  try {
    const respostas = await Resposta.listar();
    res.json(respostas);
  } catch (error) {
    console.error('Erro ao listar respostas:', error);
    res.status(500).json({ error: 'Erro ao listar respostas' });
  }
};

export const criarResposta = async (req, res) => {
  try {
    const { comentario, usuario, localizacaoId } = req.body;
    
    if (!comentario || !usuario || !localizacaoId) {
      return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
    }

    const resposta = await Resposta.criar(req.body);
    res.status(201).json(resposta);
  } catch (error) {
    console.error('Erro ao criar resposta:', error);
    res.status(400).json({ error: 'Erro ao criar resposta' });
  }
};

export const atualizarResposta = async (req, res) => {
  try {
    const { id } = req.params;
    const resposta = await Resposta.atualizar(id, req.body);
    
    if (!resposta) {
      return res.status(404).json({ error: 'Resposta não encontrada' });
    }

    res.json(resposta);
  } catch (error) {
    console.error('Erro ao atualizar resposta:', error);
    res.status(400).json({ error: 'Erro ao atualizar resposta' });
  }
};

export const deletarResposta = async (req, res) => {
  try {
    const { id } = req.params;
    await Resposta.deletar(id);
    res.status(204).send();
  } catch (error) {
    console.error('Erro ao deletar resposta:', error);
    res.status(400).json({ error: 'Erro ao deletar resposta' });
  }
};

export const buscarRespostaPorId = async (req, res) => {
  try {
    const { id } = req.params;
    const resposta = await Resposta.buscarPorId(id);
    
    if (!resposta) {
      return res.status(404).json({ error: 'Resposta não encontrada' });
    }

    res.json(resposta);
  } catch (error) {
    console.error('Erro ao buscar resposta:', error);
    res.status(400).json({ error: 'Erro ao buscar resposta' });
  }
};
