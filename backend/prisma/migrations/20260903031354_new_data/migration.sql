-- AlterTable
ALTER TABLE "User" ADD COLUMN     "age" INTEGER NOT NULL DEFAULT 0,
ADD COLUMN     "followers" INTEGER[],
ADD COLUMN     "following" INTEGER[],
ADD COLUMN     "gender" BOOLEAN NOT NULL DEFAULT true,
ADD COLUMN     "picturePath" TEXT NOT NULL DEFAULT '';
