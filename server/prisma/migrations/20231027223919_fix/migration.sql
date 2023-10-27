/*
  Warnings:

  - You are about to drop the column `listingCreatedBy` on the `Listing` table. All the data in the column will be lost.
  - Added the required column `listingCreatedById` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `placeAmeneties` to the `Listing` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tripInfo` to the `Trip` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Listing" DROP COLUMN "listingCreatedBy",
ADD COLUMN     "listingCreatedById" TEXT NOT NULL,
ADD COLUMN     "placeAmeneties" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Trip" ADD COLUMN     "tripInfo" JSONB NOT NULL;

-- AddForeignKey
ALTER TABLE "Listing" ADD CONSTRAINT "Listing_listingCreatedById_fkey" FOREIGN KEY ("listingCreatedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
