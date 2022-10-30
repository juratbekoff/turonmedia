import { PrismaClient } from "@prisma/client"
import {NewsDto} from "./../models"

const client = new PrismaClient()

export class NewsService  {

    createNews = async (news: NewsDto) => {
        return client.news.create({
            data: {
                title: news.title,
                descr: news.descr,
                image: news.image || null,
                preview: news.preview,
                video: news.video || null,
                categoryId: news.categoryId,
                createdAt: new Date().toUTCString().toString()
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
    
    updatingViews = async (id: number, views: number) => {
        return client.news.updateMany({
            where: {
                id,
            },
            data: {
                views,
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
