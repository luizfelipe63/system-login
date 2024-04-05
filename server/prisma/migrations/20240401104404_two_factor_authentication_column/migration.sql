/*
  Warnings:

  - You are about to drop the column `otp_ascii` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otp_auth_url` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otp_base32` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otp_enabled` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otp_hex` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `otp_verified` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "otp_ascii",
DROP COLUMN "otp_auth_url",
DROP COLUMN "otp_base32",
DROP COLUMN "otp_enabled",
DROP COLUMN "otp_hex",
DROP COLUMN "otp_verified";

-- CreateTable
CREATE TABLE "two-factor-authentication" (
    "id" TEXT NOT NULL,
    "otp_enabled" BOOLEAN NOT NULL DEFAULT false,
    "otp_verified" BOOLEAN NOT NULL DEFAULT false,
    "otp_ascii" TEXT,
    "otp_hex" TEXT,
    "otp_base32" TEXT,
    "otp_auth_url" TEXT,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "two-factor-authentication_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "two-factor-authentication" ADD CONSTRAINT "two-factor-authentication_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
