/*
  Warnings:

  - You are about to drop the `test` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('user', 'employer', 'admin', 'ceo');

-- CreateEnum
CREATE TYPE "Permissions" AS ENUM ('dashboard', 'news', 'category', 'widthdraw');

-- DropTable
DROP TABLE "test";

-- CreateTable
CREATE TABLE "Ceo" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'ceo',
    "permission" "Permissions"[],

    CONSTRAINT "Ceo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "name" TEXT,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'admin',

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Stream" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "adminId" INTEGER,
    "newsId" INTEGER,
    "stream_url" SERIAL,

    CONSTRAINT "Stream_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "views" INTEGER,
    "createdAt" TIMESTAMP(3),
    "lastSeen" TIMESTAMP(3),

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "IPs" (
    "id" SERIAL NOT NULL,
    "IP" TEXT NOT NULL,
    "newsId" INTEGER,
    "stream_url" INTEGER,

    CONSTRAINT "IPs_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Ceo_username_key" ON "Ceo"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Stream_stream_url_key" ON "Stream"("stream_url");

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Stream" ADD CONSTRAINT "Stream_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IPs" ADD CONSTRAINT "IPs_newsId_fkey" FOREIGN KEY ("newsId") REFERENCES "News"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "IPs" ADD CONSTRAINT "IPs_stream_url_fkey" FOREIGN KEY ("stream_url") REFERENCES "Stream"("stream_url") ON DELETE SET NULL ON UPDATE CASCADE;
