/*
  Warnings:

  - The primary key for the `Accounts` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `accountId` on the `Accounts` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Accounts" DROP CONSTRAINT "Accounts_pkey",
DROP COLUMN "accountId",
ADD CONSTRAINT "Accounts_pkey" PRIMARY KEY ("userId");
