import { Prisma } from '@prisma/client'
import { twoFactorRepository } from '../two-factor-repository'
import { prisma } from '@/lib/prisma'

export class PrismaTwoFactorRepository implements twoFactorRepository {
  async create(data: Prisma.twoFactorAuthenticationUncheckedCreateInput) {
    const twoFactor = await prisma.twoFactorAuthentication.create({
      data,
    })

    return twoFactor
  }

  async findyById(id: string) {
    const twoFactor = await prisma.twoFactorAuthentication.findUnique({
      where: {
        id,
      },
    })

    return twoFactor
  }

  async verifyCode(
    id: string,
    data: Prisma.twoFactorAuthenticationUpdateInput,
  ) {
    const twoFactor = await prisma.twoFactorAuthentication.update({
      where: {
        id,
      },
      data,
    })

    return twoFactor
  }
}
