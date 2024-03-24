/*
  Warnings:

  - Added the required column `negative` to the `Analysis` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Analysis" ADD COLUMN     "negative" BOOLEAN NOT NULL;
