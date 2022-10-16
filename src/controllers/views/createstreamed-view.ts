import { ViewService } from "../../services"
import { Request, Response, NextFunction } from "express"

const newsService = new ViewService()

export const createStreamedView = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let newsId = +req.body.newsId
        let stream_url = +req.body.stream_url
        let IP = String('kokaosaos')        
                
        let findIpOnly = await newsService.findIp(IP)
        
        if(!findIpOnly) {
            
            await newsService.createIpWithStream(IP, newsId, stream_url)

                let countingViews = (await newsService.findAllIP(newsId)).map(obj => obj.id).length
                                            
                    let updatedViews = await newsService.updatingViews(newsId, countingViews, new Date())
                                
                        return res.status(200).send({
                                message: `ID: ${newsId}, stream_url: ${stream_url} news!`,
                                news: updatedViews
                        })
        }
       
        let oldNews = await newsService.findNewsById(newsId)
        
        return res.status(200).send({
            message: `ID: ${newsId}, stream_url: ${stream_url} news!`,
            news: oldNews?.news
        })
        
    } catch (error) {
            next(error)
    }
}

