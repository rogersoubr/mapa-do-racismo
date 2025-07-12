/*
  Warnings:

  - You are about to drop the `ocorrencia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_ocorrenciaId_fkey";

-- DropForeignKey
ALTER TABLE "ocorrencia" DROP CONSTRAINT "ocorrencia_localizacaoId_fkey";

-- DropForeignKey
ALTER TABLE "ocorrencia" DROP CONSTRAINT "ocorrencia_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "resposta" DROP CONSTRAINT "resposta_ocorrenciaId_fkey";

-- DropTable
DROP TABLE "ocorrencia";

-- CreateTable
CREATE TABLE "ocorrencias" (
    "id" SERIAL NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'aberta',
    "localizacaoId" INTEGER NOT NULL,
    "tipoRacismoId" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ocorrencias_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "ocorrencias_localizacaoId_idx" ON "ocorrencias"("localizacaoId");

-- CreateIndex
CREATE INDEX "ocorrencias_tipoRacismoId_idx" ON "ocorrencias"("tipoRacismoId");

-- AddForeignKey
ALTER TABLE "ocorrencias" ADD CONSTRAINT "ocorrencias_localizacaoId_fkey" FOREIGN KEY ("localizacaoId") REFERENCES "localizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocorrencias" ADD CONSTRAINT "ocorrencias_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta" ADD CONSTRAINT "resposta_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "ocorrencias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "ocorrencias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
