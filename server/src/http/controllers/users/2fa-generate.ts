import { prisma } from '@/lib/prisma'
import { generateRandomBase32 } from '@/utils/generateRandomBase32'
import { FastifyReply, FastifyRequest } from 'fastify'
import * as OTPAuth from 'otpauth'
import { z } from 'zod'

export async function twoFAGenerate(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const generateBodySchema = z.object({
    user_id: z.string(),
  })

  try {
    const { user_id } = generateBodySchema.parse(request.body)

    const user = await prisma.user.findUnique({ where: { id: user_id } })

    if (!user) {
      return reply.status(404).send({
        status: 'fail',
        message: 'No user with that email exists',
      })
    }

    const base32_secret = generateRandomBase32()

    const totp = new OTPAuth.TOTP({
      issuer: 'luizfelipe63',
      label: '2fa-generate',
      algorithm: 'SHA1',
      digits: 6,
      secret: base32_secret,
    })

    const otpauth_url = totp.toString()

    await prisma.user.update({
      where: { id: user_id },
      data: {
        otp_auth_url: otpauth_url,
        otp_base32: base32_secret,
      },
    })

    reply.status(200).send({
      base32: base32_secret,
      otpauth_url,
    })
  } catch (error) {
    reply.status(500).send({
      status: 'error',
    })
  }
}
