import { WidthdrawService, BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const widthdrawService = new WidthdrawService()
const balansService = new BalansService()

export const requestWidthdraw = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let { adminId, amount } = req.body
        
        let findAdminBalans = await balansService.findAdminById(+adminId)

        if(findAdminBalans?.current_balans! < amount) {
            return res.status(200).send({
                message: `Kechirasiz! siz maximum ${findAdminBalans?.current_balans} so'm yechib bilasiz!`
            })
        }

        if(findAdminBalans?.current_balans! === 0) {
            return res.status(400).json({
                message: `Sizda sorov yuborish uchun mablag yetarli emas!`,
                your_balans: findAdminBalans?.current_balans
            })
        }

        if(findAdminBalans?.current_balans! < 40) {
            return res.status(400).json({
                message: `Kechirasiz! platformadan eng kamida 40 so'mdan kam bo'lmagan miqdorda pul yechish mumkin!`,
                your_balans: findAdminBalans?.current_balans
            })
        }

        let decreasedCurrentBalans = findAdminBalans?.current_balans! - amount
        
        await balansService.addAmount(adminId, decreasedCurrentBalans)
        
        let requestWidthdraw = await widthdrawService.requestWidthdraw(adminId, amount)

        return res.status(200).json({
            message: `Pul yechish boyicha so'rovingiz qabul qilindi!`,
            status: requestWidthdraw.status,
            current_balans: decreasedCurrentBalans
        })

    } catch (error) {
            next()
    }
}
