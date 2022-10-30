import { NextFunction, Request, Response } from "express"
import { DashboardService } from "../../services/index"

const dashbaordService = new DashboardService()

export const dashbaord = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let news = (await dashbaordService.getNewsCount()).map(obj => obj.id).length
        let views = (await dashbaordService.getViewsCount()).map(obj => obj.id).length
        let admins = (await dashbaordService.getAdminsCount()).map(obj => obj.id).length
        let admins_balans = (await dashbaordService.getAdminsCount()).map(obj => obj.current_balans!).reduce((acc, curr) => acc + curr)
        let widthdraws = (await dashbaordService.getWidthdrawsCount()).map(obj => obj.id).length
        let widthdraws_amount = (await dashbaordService.getWidthdrawsCount()).map(obj => obj.amount!).reduce((acc, curr) => acc + curr)
        let cancelled_widthdraws = (await dashbaordService.getWidthdrawsCount()).filter(obj => obj.status == "CANCELLED").length
        let paid_widthdraws = (await dashbaordService.getWidthdrawsCount()).filter(obj => obj.status == "PAID").length
        let checking_widthdraws = (await dashbaordService.getWidthdrawsCount()).filter(obj => obj.status == "CHECKING").length
        let streams = (await dashbaordService.getStreamsCount()).map(obj => obj.id).length

        return res.status(200).json({
            message: `Welcome to Dashboard!`,
            dashboard: {
                news,
                views,
                admins,
                admins_balans,
                widthdraws,
                checking_widthdraws,
                cancelled_widthdraws,
                paid_widthdraws,
                widthdraws_amount,
                streams
            }
        })

    } catch (error) {
        next(error)
    }

}
