-- AlterTable
ALTER TABLE "users" ADD COLUMN     "otp_ascii" TEXT,
ADD COLUMN     "otp_auth_url" TEXT,
ADD COLUMN     "otp_base32" TEXT,
ADD COLUMN     "otp_enabled" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "otp_hex" TEXT,
ADD COLUMN     "otp_verified" BOOLEAN NOT NULL DEFAULT false;
