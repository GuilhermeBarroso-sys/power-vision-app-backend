/*
  Warnings:

  - You are about to drop the column `imageKey` on the `products` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "products" DROP COLUMN "imageKey",
ADD COLUMN     "imageUrl" TEXT;
