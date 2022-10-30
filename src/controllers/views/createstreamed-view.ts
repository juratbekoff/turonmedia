import { ViewService, BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const newsService = new ViewService()
const balansService = new BalansService()

export const createStreamedView = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let newsId = +req.body.newsId
        let stream_url = +req.body.stream_url
        let IP = String(12131)        

        let checking = await newsService.checkingRight(newsId, stream_url)

        if(!checking) {
            return res.status(400).send({
                message: `stream_url va newsId bir biriga mos emas!`
            })
        }
                
        let findIp = await newsService.findIpWithId(newsId, IP)
                
        if(findIp.length === 0) {
            
            await newsService.createIpWithStream(IP, newsId, stream_url)

            let countingViews = (await newsService.findAllIP(newsId)).map(obj => obj.id).length
                                            
            let updatedViews = await newsService.updatingViews(newsId, countingViews)
  
            let findAdminBalans = await balansService.findAdminBalans(stream_url)
            
            // add balans for balans model
            await balansService.addBalans(10, findAdminBalans?.adminId!, stream_url) 

            let balans = (await balansService.findAdminAllBalans(findAdminBalans?.adminId!)).map(obj => obj.amount).reduce((acc, curr) => acc + curr) 
            let addBalans = findAdminBalans?.admin?.current_balans! + 10

            // add balans
            await balansService.addAmount(findAdminBalans?.adminId!, addBalans)

            return res.status(200).send({
                message: `ID: ${newsId}, stream_url: ${stream_url} news!`,
                news: updatedViews,
            })
        }
       
        let oldNews = await newsService.findNewsById(newsId)
        
        return res.status(200).send({
            message: `ID: ${newsId}, stream_url: ${stream_url} news!`,
            news: oldNews
        })
        
    } catch (error) {
            next(error)
    }
}

