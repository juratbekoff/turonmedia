import { createCeo, isCeoExicted } from "../../services/ceo.service"
import { CeoDto } from "../../models"
import { Request, Response, NextFunction } from "express"

export const creatingCeo =  async (req: Request, res: Response, next: NextFunction) => {
    try {   
        
        const {name, username, password } = req.body

        const existsCeo = await isCeoExicted(username)

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

        const createdCeo = await createCeo(ceo)

        return res.status(201).json({
            message: `Ceo is created!`,
            ceo_name: createdCeo.name
        })

    } catch (err) {
            next(err)
    }

}
