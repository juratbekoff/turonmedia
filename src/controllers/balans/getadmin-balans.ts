import {  BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const balansService = new BalansService()

export const getAdminBalans = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let adminId = +req.params.adminId

        let findAdmin = await balansService.findAdminById(adminId)
        
        return res.status(200).json({
            id: findAdmin?.id,
            current_balans: findAdmin?.current_balans
        })

    } catch (error) {
            next()
    }
}
