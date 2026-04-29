/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `tag` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `tag` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "tag_name_en_key";

-- DropIndex
DROP INDEX "tag_name_ru_key";

-- DropIndex
DROP INDEX "tag_name_uk_key";

-- AlterTable
ALTER TABLE "tag" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "tag_slug_key" ON "tag"("slug");
