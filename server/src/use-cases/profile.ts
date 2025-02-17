import { UsersRepository } from '@/repositories/users-repository'
import { User } from '@prisma/client'

interface profileUseCaseRequest {
  id: string
}

interface profileUseCaseResponse {
  user: User
}

export class ProfileUseCase {
  constructor(private usersRepository: UsersRepository) {}

  async execute({
    id
  }: profileUseCaseRequest): Promise<profileUseCaseResponse> {
    const user = await this.usersRepository.findById(id)

    if (!user) {
      throw new Error("User no exist")
    } 

    return {
      user
    }
  }
}
