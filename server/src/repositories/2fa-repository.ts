import { Prisma, twoFactorAuthentication } from '@prisma/client'

export interface TwoFactorAuthenticationRepository {
  generate({
    user_id,
    otp_base32,
  }: Prisma.twoFactorAuthenticationUncheckedCreateInput): Promise<twoFactorAuthentication>
}
