import { BonusService } from "../../services/index"
import { Request, Response, NextFunction } from "express"

const bonusService = new BonusService()

export const createBonus = async(req: Request, res: Response, next: NextFunction) => {
    try {
        
        let { id, amount } = req.body

        


    } catch (error) {
            next(error)
    }

}