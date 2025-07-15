-- CreateEnum
CREATE TYPE "papelUsuario" AS ENUM ('USER', 'ADMIN');

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

-- CreateTable
CREATE TABLE "localizacao" (
    "id" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "bairro" TEXT,
    "rua" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "tipoRacismoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "localizacao_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tipoRacismo" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tipoRacismo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ocorrencias" (
    "id" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "data" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'aberta',
    "localizacaoId" TEXT NOT NULL,
    "tipoRacismoId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ocorrencias_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "resposta" (
    "id" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "localizacaoId" TEXT NOT NULL,
    "ocorrenciaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "resposta_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "avaliacao" (
    "id" TEXT NOT NULL,
    "usuario" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,
    "nota" INTEGER NOT NULL DEFAULT 0,
    "tipoRacismoId" TEXT NOT NULL,
    "ocorrenciaId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "avaliacao_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "usuarios_email_key" ON "usuarios"("email");

-- CreateIndex
CREATE INDEX "localizacao_tipoRacismoId_idx" ON "localizacao"("tipoRacismoId");

-- CreateIndex
CREATE INDEX "ocorrencias_localizacaoId_idx" ON "ocorrencias"("localizacaoId");

-- CreateIndex
CREATE INDEX "ocorrencias_tipoRacismoId_idx" ON "ocorrencias"("tipoRacismoId");

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
