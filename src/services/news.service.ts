import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export class NewsService  {

    createNews = async (title: string) => {
        return client.news.create({
            data: {
                title,
                views: 0,
                createdAt: new Date()
            }
        })
    }
    
    findNewsById = async (id: number) => {
        return client.news.findUnique({
            where: {
                id
            }
        })
    }
    
    updatingViews = async (id: number, views: number, lastSeen: Date) => {
        return client.news.updateMany({
            where: {
                id,
            },
            data: {
                views,
                lastSeen
            }
        })
    }

    getAllNews = async () => {
        return await client.news.findMany()
    }
    
    // IP
    createIP = async (IP: string, newsId: number) => {
        return client.iPs.create({
            data: {
                IP,
                newsId
            }
        })
    }
    
    findIP = async (IP: string, newsId: number) => {
        return client.iPs.findFirst({
           where: {
                IP,
                newsId,


           },
           include: {
                news: true,
           }
        })
    }
    
    findIPs = async (newsId: number) => {
        return client.iPs.findMany({
            where: {
                newsId,
            },
            include: {
                news: true
            }
        })
    }
}
