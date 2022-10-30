import { PrismaClient} from "@prisma/client"
import { StreamDto } from "../models"

const client = new PrismaClient()

export class StreamService {

    createStream = async (stream: StreamDto) => {
        return await client.stream.create({
            data: {
                name: stream.name,
                adminId: stream.adminId,
                newsId: stream.newsId,
            }
        })
    }

    findStreamById = async (id: number)=> {
        return await client.stream.findUnique({
            where: {
                id
            }
        })
    }

    findStreamsByAdminId = async (adminId: number) => {
        return client.stream.findMany({
            where: {
              adminId
            },
            include: {
                views: true,
                news: true,
                admin: true
            }
        })
    }

    getAllStreams = async () => {
        return await client.stream.findMany()
    }
}
