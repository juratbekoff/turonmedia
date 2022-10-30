import { PrismaClient} from "@prisma/client"
import { CeoDto } from "../models"

const client = new PrismaClient()

export class CeoService {

    createCeo = async (data: CeoDto) => {
        return client.ceo.create({
            data: {
                name: data.name,
                username: data.username,
                password: data.password
            }
        })
    }
    
    findCeoById = async (id: number) => {
        return client.ceo.findUnique({
            where: {
                id
            }
        })
    }
    
    findCeoByName = (username: string) => {
        return client.ceo.findFirst({
            where: {
                username
            }
        })
    }
    
    isCeoExicted = async (username: string) => {
        const ceo = await this.findCeoByName(username)
        return ceo !== null
    }
    
    deleteCeo = async (id: number) => {
        return client.ceo.delete({
            where: {
                id
            }
        })
    }
    
    allCeos = async () => {
        return client.ceo.findMany({
            select: {
                name: true
            }
        })
    }
}

export default CeoService