/*
  Warnings:

  - You are about to drop the `CategoriesOnBooks` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `CategoriesOnBooks`;

-- CreateTable
CREATE TABLE `categories_on_books` (
    `book_id` VARCHAR(191) NOT NULL,
    `categoryId` VARCHAR(191) NOT NULL,

    INDEX `categories_on_books_categoryId_idx`(`categoryId`),
    INDEX `categories_on_books_book_id_idx`(`book_id`),
    PRIMARY KEY (`book_id`, `categoryId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
