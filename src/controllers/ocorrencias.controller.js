const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Criar uma nova ocorrência
export const criarOcorrencia = async (req, res) => {
    try {
        const { descricao, 
                localizacaoId, 
                tipoRacismoId, 
                status 
            } = req.body;
        
        const ocorrencia = await prisma.ocorrencia.create({
            data: {
                descricao,
                localizacaoId,
                tipoRacismoId,
                status: status || "aberta",
            },
        });
        res.status(201).json(ocorrencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Listar todas as ocorrências
export const listarOcorrencias = async (req, res) => {
    try {
        const ocorrencias = await prisma.ocorrencia.findMany({
            include: {
                localizacao: true,
                tipoRacismo: true,
            },
        });
        res.json(ocorrencias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Buscar ocorrência por ID
export const buscarOcorrenciaPorId = async (req, res) => {
    try {
        const { id } = req.params;
        const ocorrencia = await prisma.ocorrencia.findUnique({
            where: { id: Number(id) },
            include: {
                localizacao: true,
                tipoRacismo: true,
            },
        });
        if (!ocorrencia) {
            return res.status(404).json({ error: "Ocorrência não encontrada" });
        }
        res.json(ocorrencia);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Atualizar ocorrência
export const atualizarOcorrencia = async (req, res) => {
    try {
        const { id } = req.params;
        const { descricao, 
                status, 
                localizacaoId, 
                tipoRacismoId 
            } = req.body;
            
        const ocorrencia = await prisma.ocorrencia.update({
            where: { id: Number(id) },
            data: { descricao, 
                    status, 
                    localizacaoId, 
                    tipoRacismoId 
                  },
        });
        res.json(ocorrencia);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

// Remover ocorrência
export const removerOcorrencia = async (req, res) => {
    try {
        const { id } = req.params;
        await prisma.ocorrencia.delete({
            where: { id: Number(id) },
        });
        res.json({ message: "Ocorrência removida com sucesso" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};
