import { WidthdrawService, BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const widthdrawService = new WidthdrawService()

export const adminWidthdrawRequests= async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let adminId = +req.params.adminId

        let findWidthRequests = await widthdrawService.getRequestListsByAdminId(adminId)

        let mapping = findWidthRequests.map((obj) => {
            const id = obj.id
            const amount = obj.amount
            const status = obj.status

            return {
                id,
                amount,
                status
            }
        })
        
        return res.status(200).json({
            message: `Id ${adminId} admin's widthdraw requests!`,
            requests: mapping
        })

    } catch (error) {
            next()
    }
}
