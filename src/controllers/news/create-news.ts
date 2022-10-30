import { NewsService } from "../../services/index"
import { Request, Response, NextFunction } from "express"
import { NewsDto } from "../../models"

const newsService = new NewsService()

export const creatingNews  = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let news: NewsDto = req.body

        let createdNews = await newsService.createNews(news)

        return res.status(200).send({
            message: 'News is created!',
            createdNews
        })
        
    } catch (error) {
        next(error)
    }
}
