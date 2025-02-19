import { FastifyInstance } from 'fastify'
import { generateCode } from './generate-code'

export async function twoFactorRoutes(app: FastifyInstance) {
    app.post('/generate', generateCode)
}
