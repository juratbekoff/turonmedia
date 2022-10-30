import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export class BalansService  {

    addBalans = async ( amount: number, adminId: number, streamId: number) => {
        return await client.balans.create({
            data: {
                amount,
                adminId,
                streamId
            }
        })
    }

    addAmount = async (adminId: number, amount: number) => {
        return client.admin.updateMany({
            where: {
                id: adminId
            },
            data: {
                current_balans: amount
            }
        })
    }

    makePayment = async (adminId: number) => {
        return client.widthdraw.updateMany({
            where: {
                adminId
            },
            data: {
                status: "PAID"
            }
        })
    }

    findAdminByStreamUrl = async (stream_url: number) => {
        return await client.stream.findFirst({
            where: {
                stream_url
            },
            include: {
                admin: true
            }
        })
    }

    findAdminById = async (adminId: number) => {
        return await client.admin.findUnique({
            where: {
                id: adminId
            },
            select: {
                id: true,
                name: true,
                username: true,
                current_balans: true,
                _count: {
                    select: {
                        streams: true,
                        widthdraws: true
                    }
                },
                streams: true,
                admin_balans: true,
                widthdraws: true
            }
        })
    }

    findAdminBalans = async (stream_url: number) => {
        return client.stream.findFirst({
            where: {
                stream_url
            },
            include: {
                admin: true
            }
        })
    }

    // findBalans = async () => {
        
    // }

    findAdminAllBalans = async (adminId: number) => {
        return client.balans.findMany({
            where: {
                adminId
            }
        })
    }

    getBalansByStream = async (adminId: number) => {
        return client.stream.findMany({
            where: {
               adminId
            },
            include: {
                admin: true,
                balans: true,
                views: true,
                news: true
            }
        })

    }
}
