import { TwoFactorAuthenticationRepository } from '@/repositories/2fa-repository'
import { twoFactorAuthentication } from '@prisma/client'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'
import { generateRandomBase32 } from '@/utils/generateRandomBase32'
import { UsersRepository } from '@/repositories/users-repository'

interface generate2faUseCaseRequest {
  user_id: string
}

interface generate2faUseCaseResponse {
  twoFactorAuthentication: twoFactorAuthentication
}

export class Generate2faUseCase {
  constructor(
    private twoFactorRepository: TwoFactorAuthenticationRepository,
    private usersRepository: UsersRepository,
  ) {}

  async execute({
    user_id,
  }: generate2faUseCaseRequest): Promise<generate2faUseCaseResponse> {
    const user = await this.usersRepository.findById(user_id)

    if (!user) {
      throw new InvalidCredentialsError()
    }

    const otp_base32 = generateRandomBase32()

    const twoFactorAuthentication = await this.twoFactorRepository.generate({
      user_id,
      otp_base32,
    })

    return {
      twoFactorAuthentication,
    }
  }
}
