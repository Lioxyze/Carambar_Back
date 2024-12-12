/*
  Warnings:

  - Added the required column `blagues` to the `blague` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `blague` ADD COLUMN `blagues` VARCHAR(191) NOT NULL;
