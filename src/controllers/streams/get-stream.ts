import { StreamService } from "../../services/index"
import { StreamDto } from "../../models"
import { Request, Response, NextFunction } from "express"

const streamService = new StreamService()

    export const getStreamById = async (req: Request, res: Response, next: NextFunction) => {
        try {
            
            let id = +req.params.id

            let findStream = await streamService.findStreamById(id)

            if(!findStream) {
                return res.status(404).send({
                    message: `stream width ID ${id} not found!`
                })
            }

            return res.status(200).json({
                message: `ID ${id} stream's details!`,
                stream: findStream
            })

        } catch (error) {
                next(error)
        }
        
    }

   
