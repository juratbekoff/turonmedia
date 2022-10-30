-- CreateEnum
CREATE TYPE "WidthdrawStatus" AS ENUM ('CHECKING', 'PAID', 'CANCELLED');

-- AlterTable
ALTER TABLE "Admin" ADD COLUMN     "current_balans" INTEGER;

-- AlterTable
ALTER TABLE "IPs" ALTER COLUMN "IP" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Stream" ALTER COLUMN "stream_url" DROP NOT NULL;

-- CreateTable
CREATE TABLE "Balans" (
    "id" SERIAL NOT NULL,
    "amount" INTEGER NOT NULL DEFAULT 0,
    "adminId" INTEGER,
    "streamId" INTEGER,

    CONSTRAINT "Balans_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Widthdraw" (
    "id" SERIAL NOT NULL,
    "adminId" INTEGER,
    "amount" INTEGER,
    "status" "WidthdrawStatus" NOT NULL DEFAULT 'CHECKING',

    CONSTRAINT "Widthdraw_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Balans" ADD CONSTRAINT "Balans_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Balans" ADD CONSTRAINT "Balans_streamId_fkey" FOREIGN KEY ("streamId") REFERENCES "Stream"("stream_url") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Widthdraw" ADD CONSTRAINT "Widthdraw_adminId_fkey" FOREIGN KEY ("adminId") REFERENCES "Admin"("id") ON DELETE SET NULL ON UPDATE CASCADE;
