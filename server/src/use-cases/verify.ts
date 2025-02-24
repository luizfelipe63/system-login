import { twoFactorRepository } from '@/repositories/two-factor-repository';
import { twoFactorAuthentication} from '@prisma/client'
import * as OTPAuth from "otpauth";

interface verifyUseCaseRequest {
    id: string
    token: string
}

interface  verifyUseCaseResponse {
    twoFactorAuthentication: twoFactorAuthentication
}

export class VerifyUseCase {
  constructor(private twoFactorRepository: twoFactorRepository) {}

  async execute({
    id,
    token,
  }:  verifyUseCaseRequest): Promise< verifyUseCaseResponse> {

    const twoFactorAuthentication =  await this.twoFactorRepository.findyById(id)

    if(!twoFactorAuthentication){
        throw new Error('Usuario não encontrado')
    }


    let totp = new OTPAuth.TOTP({
        issuer: "system-login.com",
        label: "felipe",
        algorithm: "SHA1",
        digits: 6,
        secret: twoFactorAuthentication.otp_base32!,
    })

    let delta = totp.validate({
        token
    })

    if (delta === null){
        throw new Error('Codigo invalido')
    }

    await this.twoFactorRepository.verifyCode(id, {
        otp_validated: true
    })

    return {
      twoFactorAuthentication
    }
  }
}
