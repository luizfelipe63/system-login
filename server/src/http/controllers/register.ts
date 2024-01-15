import { PrismaUsersRepository } from '@/repositories/prisma/prisma-user-repository'
import { RegisterUserCase } from '@/use-cases/register'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    email: z.string(),
    name: z.string(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)

  const prismaUsersRepository = new PrismaUsersRepository()
  const registerUserCase = new RegisterUserCase(prismaUsersRepository)

  await registerUserCase.execute({
    email,
    name,
    password,
  })

  return reply.status(201).send()
}
