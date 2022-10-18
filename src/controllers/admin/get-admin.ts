import {  BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const balansService = new BalansService()

export const getAdmin = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let adminId = +req.params.adminId

        let findAdmin = await balansService.findAdminById(adminId)

        return res.status(200).json({
            message: `ID ${adminId} admin!`,
            admin: findAdmin
        })

    } catch (error) {
            next()
    }
}
