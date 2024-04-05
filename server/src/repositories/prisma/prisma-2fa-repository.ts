import { prisma } from '@/lib/prisma'
import { TwoFactorAuthenticationRepository } from '../2fa-repository'
import { Prisma } from '@prisma/client'

export class PrismaTwoFactorAuthenticationRepository
  implements TwoFactorAuthenticationRepository
{
  async generate({
    user_id,
    otp_base32,
  }: Prisma.twoFactorAuthenticationUncheckedCreateInput) {
    const twoFactorAuthentication = await prisma.twoFactorAuthentication.create(
      {
        data: {
          user_id,
          otp_base32,
        },
      },
    )

    return twoFactorAuthentication
  }
}
