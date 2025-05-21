import { avaliacoes } from '../data/avaliacoes.js';

export const listarAvaliacoes = (req, res) => {
  res.json(avaliacoes);
};

export const criarAvaliacao = (req, res) => {
  const { usuario, comentario, nota } = req.body;
  const nova = {
    id: Date.now().toString(),
    usuario,
    comentario,
    nota
  };
  avaliacoes.push(nova);
  res.status(201).json(nova);
};

export const atualizarAvaliacao = (req, res) => {
  const { id } = req.params;
  const { usuario, comentario, nota } = req.body;

  const index = avaliacoes.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ mensagem: 'Avaliação não encontrada' });

  avaliacoes[index] = { id, usuario, comentario, nota };
  res.json(avaliacoes[index]);
};

export const deletarAvaliacao = (req, res) => {
  const { id } = req.params;
  const index = avaliacoes.findIndex(a => a.id === id);
  if (index === -1) return res.status(404).json({ mensagem: 'Avaliação não encontrada' });

  const removida = avaliacoes.splice(index, 1);
  res.json(removida[0]);
};
