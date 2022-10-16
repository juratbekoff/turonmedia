import { StreamService } from "../../services"
import { Request, Response, NextFunction } from "express"

const newsService = new StreamService()

export const getStreamsStat = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let adminId = +req.params.adminId
        
        let findStream = await newsService.findStreamsByAdminId(adminId)

        let mapping = findStream.map((obj) => {
            const stream_url = obj.stream_url
            const stream_name = obj.name
            const views = obj.views.map(obj => obj.id).length

            return {
                stream_url,
                stream_name,
                views
            }
        })

        return res.status(200).json({
            message: `The stats of the id ${adminId} admin!`,
            statistics: mapping
        })

    } catch (error) {
            next(error)
    }
}


