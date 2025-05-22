import { PrismaClient } from '@prisma/client';

export const obterEstatisticas = async (req, res) => {
  try {
    // Contagem total de denúncias
    const totalDenuncias = await prisma.denuncia.count();

    // Tipos únicos de racismo
    const tiposUnicos = await prisma.tipoRacismo.count();

    // Agrupamento por mês (para gráfico)
    const denunciasMensais = await prisma.$queryRaw`
      SELECT 
        TO_CHAR("createdAt", 'YYYY-MM') AS mes, 
        COUNT(*) AS total
      FROM "Denuncia"
      GROUP BY mes
      ORDER BY mes
    `;

    const dadosGrafico = denunciasMensais.map(item => ({
      data: item.mes,
      valor: parseInt(item.total),
    }));

    return res.status(200).json({
      dados: dadosGrafico,
      totais: {
        totalDenuncias,
        tiposUnicos,
        mediaMensal: Math.round(totalDenuncias / (dadosGrafico.length || 1))
      }
    });
  } catch (err) {
    return res.status(500).json({ error: 'Erro ao gerar estatísticas', detalhe: err.message });
  }
};
