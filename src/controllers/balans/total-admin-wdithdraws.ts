import { WidthdrawService, AdminService } from "../../services"

import { Request, Response, NextFunction } from "express"

const widthdrawService = new WidthdrawService()
const adminService = new AdminService()

export const totalAdminsWidthdraws = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let adminId = +req.params.adminId

        let findAdminWidthdraws = await widthdrawService.getRequestListsByAdminId(adminId)
        
        let findAdmin = await adminService.findAdminById(adminId)

        let calculating = findAdminWidthdraws.filter(obj => obj.status === "PAID").map(obj => obj.amount!).reduce((acc, curr) => acc + curr)

        return res.status(200).json({
            message: `Welcome ${findAdmin?.name}`,
            your_id: findAdmin?.id,
            current_balans: findAdmin?.current_balans,
            was_paid: calculating
        })

    } catch (error) {
        next(error)
    }
}
