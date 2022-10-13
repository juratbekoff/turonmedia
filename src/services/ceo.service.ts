import { PrismaClient} from "@prisma/client"
import { CeoDto } from "../models"

const client = new PrismaClient()

export const createCeo = async (data: CeoDto) => {
    return client.ceo.create({
        data: {
            name: data.name,
            username: data.username,
            password: data.password
        }
    })
}


export const findCeoById = async (id: number) => {
    return client.ceo.findUnique({
        where: {
            id
        }
    })
}

export const findCeoByName = async (username: string) => {
    return client.ceo.findFirst({
        where: {
            username
        }
    })
}

export const isCeoExicted = async (username: string) => {
    const ceo = await findCeoByName(username)
    return ceo !== null
}


export const deleteCeo = async (id: number) => {
    return client.ceo.delete({
        where: {
            id
        }
    })
}


export const allCeos = async () => {
    return client.ceo.findMany({
        select: {
            name: true
        }
    })
}
