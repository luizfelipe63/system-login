import { Prisma, twoFactorAuthentication } from '@prisma/client'

export interface twoFactorRepository {
  create(
    data: Prisma.twoFactorAuthenticationUncheckedCreateInput,
  ): Promise<twoFactorAuthentication>
  findyById(id: string): Promise<twoFactorAuthentication | null>
  verifyCode(
    id: string,
    data: Prisma.twoFactorAuthenticationUpdateInput,
  ): Promise<twoFactorAuthentication>
}
