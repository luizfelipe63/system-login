import { PrismaTwoFactorRepository } from '@/repositories/prisma/prisma-two-factor-respository'
import { GenerateUseCase } from '@/use-cases/generate-code'
import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'

export async function generateCode(request: FastifyRequest, reply: FastifyReply) {
    const twoFactorBodySchema = z.object({
        user_id: z.string()
    })
    
    const {user_id} = twoFactorBodySchema.parse(request.body)

  const prismaTwoFactorRepository = new PrismaTwoFactorRepository()
  const generateCodeUseCase = new GenerateUseCase(prismaTwoFactorRepository)

 const { twoFactorAuthentication } =  await generateCodeUseCase.execute({
    userId: user_id
  })

  return reply.status(200).send({
   twoFactorAuthentication 
  })
}