import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'
import { hash } from 'bcryptjs'
import { UseExistingWithEmail } from './errors/use-existing-whith-email-error'

interface RegisterUseCaseRequest {
  name: string
  email: string
  password: string
}

interface RegisterUseCaseResponse {
  user: User
}

export class RegisterUserCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    email,
    name,
    password,
  }: RegisterUseCaseRequest): Promise<RegisterUseCaseResponse> {
    const useExistingWithEmail = await this.usersRepository.findByEmail(email)

    if (useExistingWithEmail) {
      throw new UseExistingWithEmail()
    }

    const password_hash = await hash(password, 6)

    const user = await this.usersRepository.create({
      email,
      name,
      password_hash,
    })

    return {
      user,
    }
  }
}
