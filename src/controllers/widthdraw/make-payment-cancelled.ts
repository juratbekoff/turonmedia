import { WidthdrawService, BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"
import { WidthdrawStatus } from "@prisma/client"

const widthdrawService = new WidthdrawService()
const balansService = new BalansService()

export const makePaymentCancelled = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let widthdrawId = +req.params.widthdrawId

        let findWidthdraw = await widthdrawService.findWidthdrawById(widthdrawId)

        if(findWidthdraw?.status == WidthdrawStatus.PAID) {
            return res.status(400).json({
                message: `Siz ushbu pul yechish sorovini o'zgartira olmaysiz! Chunki allaqachon ushbu so'rov uchun to'lov qilib bo'lingan!`
            })
        }

        if(findWidthdraw?.status == WidthdrawStatus.CANCELLED) {
            return res.status(400).json({
                message: `Siz ushbu pul yechish sorovini o'zgartira olmaysiz! Chunki so'rov allaqachon bekor qilingan!`
            })
        }

        await widthdrawService.makePaymentCancelled(widthdrawId) 
        
        let backMoney = findWidthdraw?.admin?.current_balans! + findWidthdraw?.amount!

        await balansService.addAmount(findWidthdraw?.adminId!, backMoney)
        
        return res.status(200).json({
            message: `Widthdraw request cancelled!`,
            status: WidthdrawStatus.CANCELLED,
        })

    } catch (error) {
            next()
    }
}
