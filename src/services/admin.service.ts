import { PrismaClient} from "@prisma/client"
import { AdminDto } from "../models"

const client = new PrismaClient()

export class AdminService  {

    createAdmin = async (admin: AdminDto) => {
        return await client.admin.create({
            data: {
                name: admin.name,
                username: admin.username,
                password: admin.password
            }
        })
    }

    findAdminByName = async (username: string) => {
        return client.admin.findFirst({
            where: {
                username
            }
        })
    }

    findAdminById = async (adminId: number) => {
        return await client.admin.findUnique({
            where: {
                id: adminId
            }
        })
    }

    isAdminExicted = async (username: string) => {
        let admin = await this.findAdminByName(username)
        return admin !== null;
    }

    getAllAdmns = async () => {
        return await client.admin.findMany({
            select: {
                id: true,
                name: true,
                username: true,
                current_balans: true,
                streams: true,
            }
        })
    }
}
