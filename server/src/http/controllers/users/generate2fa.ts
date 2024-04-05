import { PrismaTwoFactorAuthenticationRepository } from '@/repositories/prisma/prisma-2fa-repository'
import { PrismaUsersRepository } from '@/repositories/prisma/prisma-user-repository'
import { Generate2faUseCase } from '@/use-cases/2fa-generate'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function Generate2fa(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const generateBodySchema = z.object({
    user_id: z.string(),
  })

  const { user_id } = generateBodySchema.parse(request.body)

  try {
    const prismaTwoFactorAuthenticationRepository =
      new PrismaTwoFactorAuthenticationRepository()
    const prismaUsersRepository = new PrismaUsersRepository()

    const generate2faUserCase = new Generate2faUseCase(
      prismaTwoFactorAuthenticationRepository,
      prismaUsersRepository,
    )

    const key = await generate2faUserCase.execute({
      user_id,
    })

    reply.status(201).send(key)
  } catch (error) {
    reply.status(500).send({
      status: 'error',
      message: error,
    })
  }
}
