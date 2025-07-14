import dotenv from 'dotenv';
dotenv.config({ path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env' });

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Iniciando seed...');

  // Limpar dados existentes (em ordem correta para constraints de FK)
  console.log('🧹 Limpando dados existentes...');
  await prisma.avaliacao.deleteMany();
  await prisma.resposta.deleteMany();
  await prisma.ocorrencias.deleteMany();
  await prisma.localizacao.deleteMany();
  await prisma.tipoRacismo.deleteMany();
  await prisma.usuario.deleteMany();

  // Criar usuários de exemplo
  console.log('👤 Criando usuários...');
  const hashedPassword = await bcrypt.hash('senha123', 10);
  const usuarios = await prisma.usuario.createMany({
    data: [
      {
        email: 'admin@example.com',
        senha: hashedPassword,
        papel: 'ADMIN',
      },
      {
        email: 'user1@example.com',
        senha: hashedPassword,
        papel: 'USER',
      },
      {
        email: 'user2@example.com',
        senha: hashedPassword,
        papel: 'USER',
      }
    ],
    skipDuplicates: true,
  });

  // Criar tipos de racismo
  console.log('📝 Criando tipos de racismo...');
  const tiposRacismo = await prisma.tipoRacismo.createMany({
    data: [
      { descricao: 'Racismo Estrutural' },
      { descricao: 'Racismo Institucional' },
      { descricao: 'Racismo Ambiental' },
      { descricao: 'Racismo Religioso' },
      { descricao: 'Xenofobia' },
    ],
    skipDuplicates: true,
  });

  const tipos = await prisma.tipoRacismo.findMany();
  
  // Criar localizações
  console.log('📍 Criando localizações...');
  const bairrosSP = [
    'Sé', 'Liberdade', 'Consolação', 'Bela Vista', 'Vila Mariana',
    'Pinheiros', 'Vila Madalena', 'Moema', 'Itaim Bibi', 'Jardins'
  ];

  const localizacoes = [];
  for (let i = 0; i < 15; i++) {
    const tipoIndex = i % tipos.length;
    const bairroIndex = i % bairrosSP.length;
    
    const localizacao = await prisma.localizacao.create({
      data: {
        nome: `Local ${i + 1}`,
        descricao: `Local de ocorrência no bairro ${bairrosSP[bairroIndex]}`,
        bairro: bairrosSP[bairroIndex],
        rua: `Rua ${String.fromCharCode(65 + i)}`,
        latitude: -23.5 + (Math.random() * 0.5),
        longitude: -46.6 + (Math.random() * 0.5),
        tipoRacismoId: tipos[tipoIndex].id,
      }
    });
    localizacoes.push(localizacao);
  }

  // Criar ocorrências
  console.log('🚨 Criando ocorrências...');
  const statusList = ['aberta', 'em análise', 'fechada'];
  const ocorrencias = [];

  for (let i = 0; i < 20; i++) {
    const localizacaoIndex = i % localizacoes.length;
    const tipoIndex = i % tipos.length;
    const statusIndex = i % statusList.length;

    const ocorrencia = await prisma.ocorrencias.create({
      data: {
        descricao: `Ocorrência ${i + 1} de ${tipos[tipoIndex].descricao}`,
        status: statusList[statusIndex],
        localizacaoId: localizacoes[localizacaoIndex].id,
        tipoRacismoId: tipos[tipoIndex].id,
      }
    });
    ocorrencias.push(ocorrencia);
  }

  // Criar respostas
  console.log('💬 Criando respostas...');
  const nomesUsuarios = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];
  
  for (let i = 0; i < 30; i++) {
    const ocorrenciaIndex = i % ocorrencias.length;
    const localizacaoId = ocorrencias[ocorrenciaIndex].localizacaoId;
    const nomeIndex = i % nomesUsuarios.length;
    
    await prisma.resposta.create({
      data: {
        comentario: `Comentário sobre a ocorrência ${ocorrenciaIndex + 1}`,
        usuario: nomesUsuarios[nomeIndex],
        localizacaoId,
        ocorrenciaId: ocorrencias[ocorrenciaIndex].id,
      }
    });
  }

  // Criar avaliações
  console.log('⭐ Criando avaliações...');
  const usuariosDb = await prisma.usuario.findMany();
  
  for (let i = 0; i < 25; i++) {
    const ocorrenciaIndex = i % ocorrencias.length;
    const tipoIndex = ocorrencias[ocorrenciaIndex].tipoRacismoId;
    const usuarioIndex = i % usuariosDb.length;
    
    await prisma.avaliacao.create({
      data: {
        usuario: usuariosDb[usuarioIndex].email,
        comentario: `Avaliação da ocorrência ${ocorrenciaIndex + 1}`,
        nota: Math.floor(Math.random() * 5) + 1,
        tipoRacismoId: tipoIndex,
        ocorrenciaId: ocorrencias[ocorrenciaIndex].id,
      }
    });
  }

  console.log('✅ Seed concluído com sucesso!');
}

main()
  .catch((e) => {
    console.error('❌ Erro no seed:', e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });