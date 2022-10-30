import { StreamService } from "../../services/index"
import { StreamDto } from "../../models"
import { Request, Response, NextFunction } from "express"

const streamService = new StreamService()

export const getAllStreams = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let streams = await streamService.getAllStreams()

        if(streams.length === 0) {
            return res.status(404).send({
                message: `Sorry! we can not find any streams!`
            })
        }

        return res.status(200).json({
            message: 'All streams!',
            streams
        })
    

    } catch (error) {
            next(error)
    }
}
