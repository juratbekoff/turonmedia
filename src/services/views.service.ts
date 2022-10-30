import { PrismaClient } from "@prisma/client"

const client = new PrismaClient()

export class ViewService  {

    // the views part wihtout Streams
    updatingViews = async (id: number, views: number) => {
        return await client.news.update({
            where: {
                id
            },
            data: {
                views,
            }
        })
    }

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
            }
        })
    }

    // IP
    createIpWithoutStream = async (IP: string, newsId: number) => {
        return await client.iPs.create({
            data: {
                IP,
                newsId
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

    findIpWithId = async (newsId: number, IP: string) => {
         return client.iPs.findMany({
            where: {
                newsId,
                IP,
            }
         })   
    }  
    
    checkingRight = async (newsId: number, stream_url: number) => {
        return client.stream.findFirst({
            where: {
                newsId,
                stream_url
            }
        })
    }
    
}

