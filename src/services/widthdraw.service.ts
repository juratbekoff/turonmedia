import { PrismaClient} from "@prisma/client"

const client = new PrismaClient()

export class WidthdrawService {

    requestWidthdraw = async (adminId: number, amount: number) => {
        return await client.widthdraw.create({
            data: {
                adminId,
                amount
            }
        })
    }
    
    makePaymentSuccess = async (widthdrawId: number) => {
        return client.widthdraw.updateMany({
            where: {
                id: widthdrawId
            },
            data: {
                status: "PAID"
            }
        })    
    }

     
    makePaymentCancelled = async (widthdrawId: number) => {
        return client.widthdraw.updateMany({
            where: {
                id: widthdrawId
            },
            data: {
                status: "CANCELLED"
            }
        })    
    }

    getRequestListsByAdminId = async (adminId: number) => {
        return await client.widthdraw.findMany({
            where: {
                adminId
            },
            include: {
                admin: true
            }
        })
    }

    getAllWidthdrawReuqests = async () => {
        return client.widthdraw.findMany({
            include: {
                admin: true
            }
        })
    }

    findWidthdrawById = async (id: number) => {
        return client.widthdraw.findUnique({
            where: {
                id
            },
            include: {
                admin: true
            }
        })
    }
}