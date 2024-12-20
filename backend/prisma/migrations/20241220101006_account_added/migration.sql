-- CreateTable
CREATE TABLE "Accounts" (
    "accountId" SERIAL NOT NULL,
    "balance" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Accounts_pkey" PRIMARY KEY ("accountId")
);

-- AddForeignKey
ALTER TABLE "Accounts" ADD CONSTRAINT "Accounts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
