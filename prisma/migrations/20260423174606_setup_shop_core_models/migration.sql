/*
  Warnings:

  - You are about to drop the `bubble_tea` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "bubble_tea";

-- CreateTable
CREATE TABLE "carousel" (
    "id" SERIAL NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt_en" TEXT NOT NULL,
    "alt_uk" TEXT NOT NULL,
    "alt_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "carousel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "category" (
    "id" SERIAL NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "desc_en" TEXT NOT NULL,
    "desc_uk" TEXT NOT NULL,
    "desc_ru" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "alt_en" TEXT NOT NULL,
    "alt_uk" TEXT NOT NULL,
    "alt_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ingredient" (
    "id" SERIAL NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item" (
    "id" SERIAL NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "shortDesc_en" TEXT NOT NULL,
    "shortDesc_uk" TEXT NOT NULL,
    "shortDesc_ru" TEXT NOT NULL,
    "desc_en" TEXT NOT NULL,
    "desc_uk" TEXT NOT NULL,
    "desc_ru" TEXT NOT NULL,
    "price" DECIMAL(10,2) NOT NULL,
    "salePrice" DECIMAL(10,2),
    "weight" TEXT,
    "image" TEXT NOT NULL,
    "alt_en" TEXT NOT NULL,
    "alt_uk" TEXT NOT NULL,
    "alt_ru" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "categoryId" INTEGER NOT NULL,

    CONSTRAINT "item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tag" (
    "id" SERIAL NOT NULL,
    "name_en" TEXT NOT NULL,
    "name_uk" TEXT NOT NULL,
    "name_ru" TEXT NOT NULL,
    "type" TEXT NOT NULL DEFAULT 'flavor',

    CONSTRAINT "tag_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "item_ingredients" (
    "id" SERIAL NOT NULL,
    "itemId" INTEGER NOT NULL,
    "ingredientId" INTEGER NOT NULL,
    "amount" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "item_ingredients_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "review" (
    "id" SERIAL NOT NULL,
    "rating" INTEGER NOT NULL,
    "comment" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "cart_item" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL DEFAULT 1,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "itemId" INTEGER NOT NULL,
    "userId" TEXT NOT NULL,

    CONSTRAINT "cart_item_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_ItemToTag" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ItemToTag_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE UNIQUE INDEX "category_name_en_key" ON "category"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_uk_key" ON "category"("name_uk");

-- CreateIndex
CREATE UNIQUE INDEX "category_name_ru_key" ON "category"("name_ru");

-- CreateIndex
CREATE UNIQUE INDEX "ingredient_name_en_key" ON "ingredient"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "ingredient_name_uk_key" ON "ingredient"("name_uk");

-- CreateIndex
CREATE UNIQUE INDEX "ingredient_name_ru_key" ON "ingredient"("name_ru");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_en_key" ON "tag"("name_en");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_uk_key" ON "tag"("name_uk");

-- CreateIndex
CREATE UNIQUE INDEX "tag_name_ru_key" ON "tag"("name_ru");

-- CreateIndex
CREATE INDEX "_ItemToTag_B_index" ON "_ItemToTag"("B");

-- AddForeignKey
ALTER TABLE "item" ADD CONSTRAINT "item_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_ingredients" ADD CONSTRAINT "item_ingredients_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "item_ingredients" ADD CONSTRAINT "item_ingredients_ingredientId_fkey" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "review" ADD CONSTRAINT "review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_itemId_fkey" FOREIGN KEY ("itemId") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "cart_item" ADD CONSTRAINT "cart_item_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToTag" ADD CONSTRAINT "_ItemToTag_A_fkey" FOREIGN KEY ("A") REFERENCES "item"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ItemToTag" ADD CONSTRAINT "_ItemToTag_B_fkey" FOREIGN KEY ("B") REFERENCES "tag"("id") ON DELETE CASCADE ON UPDATE CASCADE;
