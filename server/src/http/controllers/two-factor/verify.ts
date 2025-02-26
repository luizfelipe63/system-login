import { PrismaTwoFactorRepository } from '@/repositories/prisma/prisma-two-factor-respository'
import { InvalidCode } from '@/use-cases/errors/invalid-code'
import { VerifyUseCase } from '@/use-cases/verify'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function verifyCode(request: FastifyRequest, reply: FastifyReply) {
  const twoFactorBodySchema = z.object({
    id: z.string(),
    token: z.string(),
  })

  const { id, token } = twoFactorBodySchema.parse(request.body)

  try {
    const prismaTwoFactorRepository = new PrismaTwoFactorRepository()
    const verifyUseCase = new VerifyUseCase(prismaTwoFactorRepository)

    const { twoFactorAuthentication } = await verifyUseCase.execute({
      id,
      token,
    })

    return reply.status(200).send({
      twoFactorAuthentication,
    })
  } catch (err) {
    if (err instanceof InvalidCode) {
      reply.status(400).send({
        message: err.message,
      })
    }
  }
}
