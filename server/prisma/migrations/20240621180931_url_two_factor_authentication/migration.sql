/*
  Warnings:

  - Added the required column `otp_auth_url` to the `two-factor-authentication` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "two-factor-authentication" ADD COLUMN     "otp_auth_url" TEXT NOT NULL;
