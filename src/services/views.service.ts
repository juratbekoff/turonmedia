import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export class ViewService  {

    // the views part wihtout Streams
    updatingViews = async (id: number, views: number, lastSeen: Date) => {
        return await client.news.update({
            where: {
                id
            },
            data: {
                views,
                lastSeen
            }
        })
    }
    
    createIpWithoutStream = async (IP: string, newsId: number) => {
            return await client.iPs.create({
                data: {
                    IP,
                    newsId
                }
            })
    }

    // the views part with Streams! 
    updatingViewsWithStream = async (id: number, stream_url: number, views: number) => {
        return await client.news.updateMany({
            where: {
                id,
                streams: {
                    every: {
                        stream_url
                    }
                }
            },
            data: {
                views
            }
        })
    }

    findNewsById = async (newsId: number) => {
        return await client.news.findFirst({
            where: {
                id: newsId
            },
            select: {
               id: true,
               title: true,
               views: true,
               createdAt: true,
               lastSeen: true
            }
        })
    }

    createIpWithStream = async (IP: string,  newsId: number, stream_url: number) => {
        return await client.iPs.create({
            data: {
                IP,
                newsId,
                stream_url
            }
        })
    }

    // IP
    findIp = async (IP: string) => {
        return client.iPs.findFirst({
            where: {
                IP
            }
        })
    }

    findAllIP = async (newsId: number) => {
        return await client.iPs.findMany({
            where: {
                newsId
            },
            include: {
                news: true
            }
        })
    }
}

