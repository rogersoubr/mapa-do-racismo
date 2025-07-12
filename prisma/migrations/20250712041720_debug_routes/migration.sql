/*
  Warnings:

  - You are about to drop the `Avaliacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Estatistica` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Localizacao` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Ocorrencia` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Resposta` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `TipoRacismo` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_ocorrenciaId_fkey";

-- DropForeignKey
ALTER TABLE "Avaliacao" DROP CONSTRAINT "Avaliacao_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "Localizacao" DROP CONSTRAINT "Localizacao_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "Ocorrencia" DROP CONSTRAINT "Ocorrencia_localizacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Ocorrencia" DROP CONSTRAINT "Ocorrencia_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_localizacaoId_fkey";

-- DropForeignKey
ALTER TABLE "Resposta" DROP CONSTRAINT "Resposta_ocorrenciaId_fkey";

-- DropTable
DROP TABLE "Avaliacao";

-- DropTable
DROP TABLE "Estatistica";

-- DropTable
DROP TABLE "Localizacao";

-- DropTable
DROP TABLE "Ocorrencia";

-- DropTable
DROP TABLE "Resposta";

-- DropTable
DROP TABLE "TipoRacismo";

-- CreateTable
CREATE TABLE "localizacao" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "bairro" TEXT,
    "rua" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "tipoRacismoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "localizacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoRacismo" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipoRacismo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ocorrencia" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'aberta',
    "localizacaoId" INTEGER NOT NULL,
    "tipoRacismoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ocorrencia_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resposta" (
    "id" SERIAL NOT NULL,
    "comentario" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "localizacaoId" INTEGER NOT NULL,
    "ocorrenciaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" SERIAL NOT NULL,
    "usuario" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "nota" INTEGER NOT NULL DEFAULT 0,
    "tipoRacismoId" INTEGER NOT NULL,
    "ocorrenciaId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "estatistica" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "total" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "estatistica_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "localizacao_tipoRacismoId_idx" ON "localizacao"("tipoRacismoId");

-- CreateIndex
CREATE INDEX "ocorrencia_localizacaoId_idx" ON "ocorrencia"("localizacaoId");

-- CreateIndex
CREATE INDEX "ocorrencia_tipoRacismoId_idx" ON "ocorrencia"("tipoRacismoId");

-- CreateIndex
CREATE INDEX "resposta_localizacaoId_idx" ON "resposta"("localizacaoId");

-- CreateIndex
CREATE INDEX "resposta_ocorrenciaId_idx" ON "resposta"("ocorrenciaId");

-- CreateIndex
CREATE INDEX "avaliacao_tipoRacismoId_idx" ON "avaliacao"("tipoRacismoId");

-- CreateIndex
CREATE INDEX "avaliacao_ocorrenciaId_idx" ON "avaliacao"("ocorrenciaId");

-- AddForeignKey
ALTER TABLE "localizacao" ADD CONSTRAINT "localizacao_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocorrencia" ADD CONSTRAINT "ocorrencia_localizacaoId_fkey" FOREIGN KEY ("localizacaoId") REFERENCES "localizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocorrencia" ADD CONSTRAINT "ocorrencia_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta" ADD CONSTRAINT "resposta_localizacaoId_fkey" FOREIGN KEY ("localizacaoId") REFERENCES "localizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta" ADD CONSTRAINT "resposta_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "ocorrencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "ocorrencia"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
