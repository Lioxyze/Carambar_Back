-- CreateTable
CREATE TABLE `blague` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `blagues` VARCHAR(191) NOT NULL,
    `reponse` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
