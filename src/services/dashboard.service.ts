import { PrismaClient} from "@prisma/client"

const client = new PrismaClient()

export class DashboardService {

    getNewsCount = async () => {
        return client.news.findMany()
    }

    getViewsCount = async () => {
        return client.iPs.findMany()
    }

    getAdminsCount = async () => {
        return client.admin.findMany()
    }
    
    getWidthdrawsCount = async () => {
        return client.widthdraw.findMany()
    }

    getStreamsCount = async () => {
        return client.stream.findMany()
    }
}
