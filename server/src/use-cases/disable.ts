import { twoFactorRepository } from '@/repositories/two-factor-repository'
import { twoFactorAuthentication } from '@prisma/client'
import * as OTPAuth from 'otpauth'
import { InvalidCode } from './errors/invalid-code'

interface disableUseCaseRequest {
  id: string
  token: string
}

interface disableUseCaseResponse {
  twoFactorAuthentication: twoFactorAuthentication
}

export class DisableUseCase {
  constructor(private twoFactorRepository: twoFactorRepository) {}

  async execute({
    id,
    token,
  }: disableUseCaseRequest): Promise<disableUseCaseResponse> {
    const twoFactorAuthentication = await this.twoFactorRepository.findyById(id)

    if (!twoFactorAuthentication) {
      throw new InvalidCode()
    }

    const totp = new OTPAuth.TOTP({
      issuer: 'system-login.com',
      label: 'felipe',
      algorithm: 'SHA1',
      digits: 6,
      secret: twoFactorAuthentication.otp_base32!,
    })

    const delta = totp.validate({
      token,
      window: 1,
    })

    if (delta === null) {
      throw new InvalidCode()
    }

    await this.twoFactorRepository.verifyCode(id, {
      otp_validated: true,
    })

    return {
      twoFactorAuthentication,
    }
  }
}
