import { twoFactorRepository } from '@/repositories/two-factor-repository'
import { generateRandomBase32 } from '@/utils/generateRandomBase32'
import { twoFactorAuthentication } from '@prisma/client'
import * as OTPAuth from 'otpauth'

interface generateCodeUseCaseRequest {
  userId: string
}

interface generateCodeUseCaseResponse {
  twoFactorAuthentication: twoFactorAuthentication
}

export class GenerateUseCase {
  constructor(private twoFactorRepository: twoFactorRepository) {}

  async execute({
    userId,
  }: generateCodeUseCaseRequest): Promise<generateCodeUseCaseResponse> {
    const otp_base32 = generateRandomBase32()

    const totp = new OTPAuth.TOTP({
      issuer: 'system-login.com',
      label: 'felipe',
      algorithm: 'SHA1',
      digits: 6,
      secret: otp_base32,
    })

    const otp_auth_url = totp.toString()

    const twoFactorAuthentication = await this.twoFactorRepository.create({
      otp_base32,
      otp_auth_url,
      user_id: userId,
    })

    return {
      twoFactorAuthentication,
    }
  }
}
