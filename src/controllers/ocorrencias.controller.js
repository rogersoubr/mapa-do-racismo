import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const ocorrenciasController = {

    // Criar uma nova ocorrência
    async criarOcorrencias(req, res) {
        try {
            const { descricao, localizacaoId, tipoRacismoId, status } = req.body;

            const ocorrencias = await prisma.ocorrencias.create({
                data: {
                    descricao,
                    localizacaoId,
                    tipoRacismoId,
                    status: status || "aberta",
                },
            });
            res.status(201).json(ocorrencias);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },


    // Listar todas as ocorrências
     async listarOcorrencias(req, res){
        try {
            const ocorrencias = await prisma.ocorrencias.findMany({
                include: {
                    localizacao: true,
                    tipoRacismo: true,
                },
            });
            res.json(ocorrencias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    // Buscar ocorrência por ID
    async buscarOcorrenciasPorId(req, res){
        try {
            const { id } = req.params;
            const ocorrencias = await prisma.ocorrencias.findUnique({
                where: { id },
                include: {
                    localizacao: true,
                    tipoRacismo: true,
                },
            });
            if (!ocorrencias) {
                return res.status(404).json({ error: "Ocorrência não encontrada" });
            }
            res.json(ocorrencias);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    },


    // Atualizar ocorrência
    async atualizarOcorrencias(req, res){
        try {
            const { id } = req.params;
            const { descricao, status, localizacaoId, tipoRacismoId } = req.body;

            const ocorrencias = await prisma.ocorrencias.update({
                where: { id: id },
                data: {
                    descricao,
                    status,
                    localizacaoId,
                    tipoRacismoId,
                },
            });
            res.json(ocorrencias);
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    },


    // Remover ocorrência
    async removerOcorrencias(req, res){
        try {
            const { id } = req.params;
            await prisma.ocorrencias.delete({
                where: { id: id },
            });
            res.json({ message: "Ocorrência removida com sucesso" });
        } catch (error) {
            res.status(400).json({ error: error.message });
        }
    }


}
export default ocorrenciasController;









