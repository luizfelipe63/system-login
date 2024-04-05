/*
  Warnings:

  - You are about to drop the column `otp_ascii` on the `two-factor-authentication` table. All the data in the column will be lost.
  - You are about to drop the column `otp_auth_url` on the `two-factor-authentication` table. All the data in the column will be lost.
  - You are about to drop the column `otp_enabled` on the `two-factor-authentication` table. All the data in the column will be lost.
  - You are about to drop the column `otp_hex` on the `two-factor-authentication` table. All the data in the column will be lost.
  - You are about to drop the column `otp_verified` on the `two-factor-authentication` table. All the data in the column will be lost.
  - Made the column `otp_base32` on table `two-factor-authentication` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "two-factor-authentication" DROP COLUMN "otp_ascii",
DROP COLUMN "otp_auth_url",
DROP COLUMN "otp_enabled",
DROP COLUMN "otp_hex",
DROP COLUMN "otp_verified",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "otp_validated" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "otp_base32" SET NOT NULL;
