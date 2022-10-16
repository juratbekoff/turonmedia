import { StreamService } from "../../services/index"
import { StreamDto } from "../../models"
import { Request, Response, NextFunction } from "express"

const streamService = new StreamService()

    export const createStream = async (req: Request, res: Response, next: NextFunction) => {
        try {

            let stream: StreamDto = {
                name: req.body.name,
                adminId: +req.body.adminId,
                newsId: +req.body.newsId,
            }
    
            let createStream  = await streamService.createStream(stream)
    
            return res.status(200).json({
                message: `Stream is created!`,
                stream_url: createStream.stream_url
            })

        } catch (error) {
                next(error)
        }
    }


