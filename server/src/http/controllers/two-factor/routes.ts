import { FastifyInstance } from 'fastify'
import { generateCode } from './generate'
import { verifyCode } from './verify'

export async function twoFactorRoutes(app: FastifyInstance) {
    app.post('/generate', generateCode)
    app.post('/verify', verifyCode)
}
