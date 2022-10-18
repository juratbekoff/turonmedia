import { BalansService, WidthdrawService } from "../../services"
import { Request, Response, NextFunction } from "express"
import { WidthdrawStatus } from "@prisma/client"

const widthdrawService = new WidthdrawService()
const balansService = new BalansService()

export const makePaymentSuccess = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let widthdrawId = +req.params.widthdrawId

        let findWidthdraw = await widthdrawService.findWidthdrawById(widthdrawId)
        
        if(findWidthdraw?.status === WidthdrawStatus.PAID) {
            return res.status(400).json({
                message: `Siz ushbu pul yechish sorovini o'zgartira olmaysiz! Chunki allaqachon ushbu so'rov uchun to'lov qilib bo'lingan!`
            })
        }

        await widthdrawService.makePaymentSuccess(widthdrawId) 
        
        return res.status(200).json({
            message: `Successfully payment!`,
            status: WidthdrawStatus.PAID
        })

    } catch (error) {
            next()
    }
}
