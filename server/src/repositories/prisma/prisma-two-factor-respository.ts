import { Prisma } from "@prisma/client";
import { twoFactorRepository } from "../two-factor-repository";
import { prisma } from "@/lib/prisma";

export class PrismaTwoFactorRepository implements twoFactorRepository{
    async create(data: Prisma.twoFactorAuthenticationUncheckedCreateInput){
        const twoFactor = await prisma.twoFactorAuthentication.create({
            data
        })

        return twoFactor
    }
}