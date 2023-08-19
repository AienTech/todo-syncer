/*
  Warnings:

  - A unique constraint covering the columns `[integrationId]` on the table `List` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[integrationId]` on the table `Todo` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "List_integrationId_key" ON "List"("integrationId");

-- CreateIndex
CREATE UNIQUE INDEX "Todo_integrationId_key" ON "Todo"("integrationId");
