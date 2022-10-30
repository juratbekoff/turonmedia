import { WidthdrawService, BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const widthdrawService = new WidthdrawService()

export const getAllWidthdrawRequests= async (req: Request, res: Response, next: NextFunction) => {
    try {

        let getWidthdrawRequests = await widthdrawService.getAllWidthdrawReuqests()

        let mapping = getWidthdrawRequests.map((obj) => {
            const id = obj.id
            const adminId = obj.adminId
            const amount = obj.amount
            const status = obj.status

            return {
                id,
                adminId,
                amount,
                status
            }
        })

        return res.status(200).json({
            message: `Widthdraw requests!`,
            requests: mapping
        })

    } catch (error) {
            next()
    }
}
