/*
  Warnings:

  - You are about to alter the column `price` on the `item` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - You are about to alter the column `salePrice` on the `item` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Integer`.
  - Made the column `salePrice` on table `item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "item" ALTER COLUMN "price" SET DATA TYPE INTEGER,
ALTER COLUMN "salePrice" SET NOT NULL,
ALTER COLUMN "salePrice" SET DATA TYPE INTEGER;
