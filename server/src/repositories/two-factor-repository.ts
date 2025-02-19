import { Prisma, twoFactorAuthentication} from '@prisma/client'

export interface twoFactorRepository {
  create(data: Prisma.twoFactorAuthenticationUncheckedCreateInput): Promise<twoFactorAuthentication>
}