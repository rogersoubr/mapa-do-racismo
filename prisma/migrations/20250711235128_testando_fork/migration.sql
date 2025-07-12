/*
  Warnings:

  - You are about to drop the `Denuncia` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Denuncia";

-- CreateTable
CREATE TABLE "Estatistica" (
    "id" SERIAL NOT NULL,
    "data" TIMESTAMP(3) NOT NULL,
    "total" INTEGER NOT NULL,
    "tipo" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Estatistica_pkey" PRIMARY KEY ("id")
);
