import { PrismaUsersRepository } from '@/repositories/prisma/prisma-user-repository'
import { ProfileUseCase } from '@/use-cases/profile'
import { FastifyReply, FastifyRequest } from 'fastify'

export async function profile(request: FastifyRequest, reply: FastifyReply) {

  const prismaUsersRepository = new PrismaUsersRepository()
  const profileUserCase = new ProfileUseCase(prismaUsersRepository)

 const {user} =  await profileUserCase.execute({
    id: request.user.sub
  })

  return reply.status(200).send({
    user: {
      ...user,
      password_hash: undefined
    }
  })
}
