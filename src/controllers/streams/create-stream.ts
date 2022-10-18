import { StreamService, BalansService } from "../../services/index"
import { StreamDto } from "../../models"
import { Request, Response, NextFunction } from "express"

const streamService = new StreamService()
const balansService = new BalansService()

    export const createStream = async (req: Request, res: Response, next: NextFunction) => {
        try {

            let stream: StreamDto = {
                name: req.body.name,
                adminId: +req.body.adminId,
                newsId: +req.body.newsId,
            }
            
            let createStream  = await streamService.createStream(stream)

            let findAdminBalans = await balansService.findAdminBalans(createStream.stream_url!)

            // add balans for balans model
            await balansService.addBalans(0, findAdminBalans?.adminId!, createStream.stream_url!) 
   
            let balans = (await balansService.findAdminAllBalans(findAdminBalans?.adminId!)).map(obj => obj.amount).reduce((acc, curr) => acc + curr) 
            
            // add balans
            await balansService.addAmount(findAdminBalans?.adminId!, balans)
   
    
            return res.status(200).json({
                message: `Stream is created!`,
                stream_url: createStream.stream_url
            })

        } catch (error) {
                next(error)
        }
    }


