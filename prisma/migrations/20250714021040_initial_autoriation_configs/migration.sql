/*
  Warnings:

  - The primary key for the `avaliacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `localizacao` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `ocorrencias` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `resposta` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `tipoRacismo` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the `estatistica` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "papelUsuario" AS ENUM ('USER', 'ADMIN');

-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_ocorrenciaId_fkey";

-- DropForeignKey
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "localizacao" DROP CONSTRAINT "localizacao_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "ocorrencias" DROP CONSTRAINT "ocorrencias_localizacaoId_fkey";

-- DropForeignKey
ALTER TABLE "ocorrencias" DROP CONSTRAINT "ocorrencias_tipoRacismoId_fkey";

-- DropForeignKey
ALTER TABLE "resposta" DROP CONSTRAINT "resposta_localizacaoId_fkey";

-- DropForeignKey
ALTER TABLE "resposta" DROP CONSTRAINT "resposta_ocorrenciaId_fkey";

-- AlterTable
ALTER TABLE "avaliacao" DROP CONSTRAINT "avaliacao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tipoRacismoId" SET DATA TYPE TEXT,
ALTER COLUMN "ocorrenciaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "avaliacao_id_seq";

-- AlterTable
ALTER TABLE "localizacao" DROP CONSTRAINT "localizacao_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "tipoRacismoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "localizacao_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "localizacao_id_seq";

-- AlterTable
ALTER TABLE "ocorrencias" DROP CONSTRAINT "ocorrencias_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "localizacaoId" SET DATA TYPE TEXT,
ALTER COLUMN "tipoRacismoId" SET DATA TYPE TEXT,
ADD CONSTRAINT "ocorrencias_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "ocorrencias_id_seq";

-- AlterTable
ALTER TABLE "resposta" DROP CONSTRAINT "resposta_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ALTER COLUMN "localizacaoId" SET DATA TYPE TEXT,
ALTER COLUMN "ocorrenciaId" SET DATA TYPE TEXT,
ADD CONSTRAINT "resposta_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "resposta_id_seq";

-- AlterTable
ALTER TABLE "tipoRacismo" DROP CONSTRAINT "tipoRacismo_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "tipoRacismo_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "tipoRacismo_id_seq";

-- DropTable
DROP TABLE "estatistica";

-- CreateTable
CREATE TABLE "usuarios" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "papel" "papelUsuario" NOT NULL DEFAULT 'USER',
    "cretedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "usuarios_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- AddForeignKey
ALTER TABLE "localizacao" ADD CONSTRAINT "localizacao_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocorrencias" ADD CONSTRAINT "ocorrencias_localizacaoId_fkey" FOREIGN KEY ("localizacaoId") REFERENCES "localizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ocorrencias" ADD CONSTRAINT "ocorrencias_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta" ADD CONSTRAINT "resposta_localizacaoId_fkey" FOREIGN KEY ("localizacaoId") REFERENCES "localizacao"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "resposta" ADD CONSTRAINT "resposta_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "ocorrencias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_tipoRacismoId_fkey" FOREIGN KEY ("tipoRacismoId") REFERENCES "tipoRacismo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "avaliacao" ADD CONSTRAINT "avaliacao_ocorrenciaId_fkey" FOREIGN KEY ("ocorrenciaId") REFERENCES "ocorrencias"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
