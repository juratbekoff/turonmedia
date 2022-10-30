import { CeoService } from "../../services/index"
import { CeoDto } from "../../models"
import { Request, Response, NextFunction } from "express"

const ceoService = new CeoService()

export const creatingCeo =  async (req: Request, res: Response, next: NextFunction) => {
    try {   
        
        const { name, username, password } = req.body

        const existsCeo = await ceoService.isCeoExicted(username)

        if(existsCeo) {
            return res.status(403).json({
                message: `ceo with username ${username} already exists.`
            })
        }

        const ceo: CeoDto = {
            name,
            username,
            password
        }

        const createdCeo = await ceoService.createCeo(ceo)

        return res.status(201).json({
            message: `Ceo is created!`,
            ceo_name: createdCeo.name
        })

    } catch (err) {
            next(err)
    }

}
