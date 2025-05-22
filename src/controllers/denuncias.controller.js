import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const createDenuncia = async (req, res) => {
  try {
    const { descricao, local, data, tipo, status } = req.body;
    const denuncia = await prisma.denuncia.create({ descricao, local, data, tipo, status });
    res.status(201).json(denuncia);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getDenuncias = async (req, res) => {
  try {
    const denuncias = await prisma.denuncia.findAll();
    res.json(denuncias);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getDenunciaById = async (req, res) => {
  try {
    const denuncia = await prisma.denuncia.findByPk(req.params.id);
    if (!denuncia) return res.status(404).json({ error: "Denúncia não encontrada" });
    res.json(denuncia);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const updateDenuncia = async (req, res) => {
  try {
    const { descricao, local, data, tipo, status } = req.body;
    const [updated] = await prisma.denuncias.update(
      { descricao, local, data, tipo, status },
      { where: { id: req.params.id } }
    );
    if (!updated) return res.status(404).json({ error: "Denúncia não encontrada" });
    res.json({ message: "Denúncia atualizada com sucesso" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const deleteDenuncia = async (req, res) => {
  try {
    const deleted = await prisma.denuncias.destroy({
      where: { id: req.params.id }
    });
    if (!deleted) return res.status(404).json({ error: "Denúncia não encontrada" });
    res.json({ message: "Denúncia excluída com sucesso" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

