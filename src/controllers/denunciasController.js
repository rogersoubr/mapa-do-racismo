import { Denuncia } from '../models';

export default {
  async create(req, res) {
    try {
      const { descricao, local, data, tipo, status } = req.body;
      const denuncia = await Denuncia.create({ descricao, local, data, tipo, status });
      res.status(201).json(denuncia);
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async findAll(req, res) {
    try {
      const denuncias = await Denuncia.findAll();
      res.json(denuncias);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async findOne(req, res) {
    try {
      const denuncia = await Denuncia.findByPk(req.params.id);
      if (!denuncia) return res.status(404).json({ error: "Denúncia não encontrada" });
      res.json(denuncia);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  },

  async update(req, res) {
    try {
      const { descricao, local, data, tipo, status } = req.body;
      const [updated] = await Denuncia.update(
        { descricao, local, data, tipo, status },
        { where: { id: req.params.id } }
      );
      if (!updated) return res.status(404).json({ error: "Denúncia não encontrada" });
      res.json({ message: "Denúncia atualizada com sucesso" });
    } catch (error) {
      res.status(400).json({ error: error.message });
    }
  },

  async delete(req, res) {
    try {
      const deleted = await Denuncia.destroy({
        where: { id: req.params.id }
      });
      if (!deleted) return res.status(404).json({ error: "Denúncia não encontrada" });
      res.json({ message: "Denúncia excluída com sucesso" });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};
