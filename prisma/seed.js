import dotenv from 'dotenv';
dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Limpar dados existentes
  console.log('🧹 Limpando dados existentes...');
  await prisma.resposta.deleteMany({});
  await prisma.avaliacao.deleteMany({});
  await prisma.localizacao.deleteMany({});
  await prisma.tipoRacismo.deleteMany({});
  await prisma.ocorrencias.deleteMany({});

  // Criar tipos de racismo
  console.log('📝 Criando tipos de racismo...');
  const tiposRacismo = await prisma.tipoRacismo.createMany({
    data: [
      { 
        descricao: 'Racismo Estrutural',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        descricao: 'Racismo Institucional',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        descricao: 'Racismo Ambiental',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        descricao: 'Racismo Religioso',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      { 
        descricao: 'Xenofobia',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ],
    skipDuplicates: true,
  });

  // Obter os IDs dos tipos de racismo criados
  const tipos = await prisma.tipoRacismo.findMany();
  
  // Criar localizações
  console.log('📍 Criando localizações...');
  const localizacoes = [];
  
  const bairrosSP = [
    'Sé', 'Liberdade', 'Consolação', 'Bela Vista', 'Vila Mariana',
    'Pinheiros', 'Vila Madalena', 'Moema', 'Itaim Bibi', 'Jardins'
  ];

  for (let i = 0; i < 20; i++) {
    const tipoIndex = Math.floor(Math.random() * tipos.length);
    const bairroIndex = Math.floor(Math.random() * bairrosSP.length);
    
    const localizacao = await prisma.localizacao.create({
      data: {
        nome: `Ocorrência ${i + 1}`,
        descricao: `Relato de situação de racismo ocorrida no bairro ${bairrosSP[bairroIndex]}`,
        bairro: bairrosSP[bairroIndex],
        rua: `Rua ${String.fromCharCode(65 + i)}`, // Gera letras A, B, C...
        latitude: -23.5 + (Math.random() * 0.5), // Gera coordenadas próximas a SP
        longitude: -46.6 + (Math.random() * 0.5),
        tipoRacismo: {
          connect: { id: tipos[tipoIndex].id }
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
    localizacoes.push(localizacao);
  }

  // Criar respostas
  console.log('💬 Criando respostas...');
  const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos', 'Juliana', 'Marcos', 'Fernanda'];
  
  for (let i = 0; i < 30; i++) {
    const localizacaoIndex = Math.floor(Math.random() * localizacoes.length);
    const nomeIndex = Math.floor(Math.random() * nomes.length);
    
    await prisma.resposta.create({
      data: {
        comentario: `Comentário de exemplo ${i + 1} sobre a ocorrência`,
        usuario: nomes[nomeIndex],
        localizacao: {
          connect: { id: localizacoes[localizacaoIndex].id }
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }

  // Criar avaliações
  console.log('⭐ Criando avaliações...');
  for (let i = 0; i < 20; i++) {
    const tipoIndex = Math.floor(Math.random() * tipos.length);
    const nomeIndex = Math.floor(Math.random() * nomes.length);
    
    await prisma.avaliacao.create({
      data: {
        usuario: nomes[nomeIndex],
        comentario: `Avaliação sobre o tipo de racismo: ${tipos[tipoIndex].descricao}`,
        nota: Math.floor(Math.random() * 5) + 1, // Nota de 1 a 5
        tipoRacismo: {
          connect: { id: tipos[tipoIndex].id }
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }

  // Criar ocorrências
  console.log('🚨 Criando ocorrências...');
  const statusList = ['aberta', 'em análise', 'fechada'];
  const ocorrencias = [];

  for (let i = 0; i < 15; i++) {
    const localizacaoIndex = Math.floor(Math.random() * localizacoes.length);
    const tipoIndex = Math.floor(Math.random() * tipos.length);
    const statusIndex = Math.floor(Math.random() * statusList.length);

    const ocorrencia = await prisma.ocorrencia.create({
      data: {
        descricao: `Ocorrência de ${tipos[tipoIndex].descricao} no bairro ${localizacoes[localizacaoIndex].bairro}`,
        status: statusList[statusIndex],
        localizacao: {
          connect: { id: localizacoes[localizacaoIndex].id }
        },
        tipoRacismo: {
          connect: { id: tipos[tipoIndex].id }
        },
        createdAt: new Date(),
        updatedAt: new Date()
      }
    });
  }

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
