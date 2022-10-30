import { NewsService } from "../../services/index"
import { Request, Response, NextFunction } from "express"
import { News } from "@prisma/client"

const newsService = new NewsService()

export const getAllNews = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let allnews = (await newsService.getAllNews()).sort((a: News, b: News) => a.id + b.id).reverse()

        return res.status(200).json({
            message: 'All news',
            count: allnews.length,
            allnews
        })

    } catch (error) {
        next(error)
    }
}

