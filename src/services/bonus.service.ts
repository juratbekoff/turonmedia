import { PrismaClient} from "@prisma/client"

const client = new PrismaClient()

export class BonusService  {

    givePremium = async (adminId: number) => {
        return await client.admin.update({
            where: {
                id: adminId
            },
            data: {
                isPremium: true
            }
        })
    }

    // marking bonus for each view!
    markingBonus = async (id: number, amount: number) => {
        return client.bonus.update({
            where: {
                id
            },
            data: {
                amount
            }
        })
    }
}
