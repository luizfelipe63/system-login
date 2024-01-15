/*
  Warnings:

  - You are about to drop the `Products` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `supplier` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Products" DROP CONSTRAINT "Products_userId_fkey";

-- DropForeignKey
ALTER TABLE "supplier" DROP CONSTRAINT "supplier_productsId_fkey";

-- DropTable
DROP TABLE "Products";

-- DropTable
DROP TABLE "supplier";
