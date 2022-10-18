import { ViewService } from "../../services"
import { Request, Response, NextFunction } from "express"

const newsService = new ViewService()

export const createView = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let newsId = +req.params.newsId
        let IP = 'req.ijuratekoffp'

        let findIp = await newsService.findIp(IP)

        if (!findIp) {
            await newsService.createIpWithoutStream(IP, newsId)

            let countingViews = (await newsService.findAllIP(newsId)).map(obj => obj.id).length

            let updatedViews = await newsService.updatingViews(newsId, countingViews, new Date())

            return res.status(200).send({
                message: `ID ${newsId} news!`,
                news: updatedViews
            })
        }

        let oldNews = await newsService.findNewsById(newsId)

        return res.status(200).send({
            message: `ID ${newsId} news!`,
            news: oldNews
        })

    } catch (error) {
        next(error)
    }
}
