-- AlterTable
ALTER TABLE `places` ADD COLUMN `placeId` INTEGER NULL;

-- CreateTable
CREATE TABLE `Categories` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Categories_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Places` ADD CONSTRAINT `Places_placeId_fkey` FOREIGN KEY (`placeId`) REFERENCES `Categories`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
