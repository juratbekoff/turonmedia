import { AdminService } from "../../services"
import { Request, Response, NextFunction } from "express"

const adminService = new AdminService()

export const getAllAdmns = async (req: Request, res: Response, next: NextFunction) => {
    try {
        
        let admins = await adminService.getAllAdmns()
        let mappingAdmins = admins.map((obj) => {
            const id = obj.id
            const name = obj.name
            const username = obj.username
            const streams = obj.streams.map(obj => obj.id).length
            const balans = obj.current_balans

            return {
                id,
                name,
                username,
                streams,
                balans
            }
        })

        return res.status(200).json({
            message: 'All admins!',
            admins: mappingAdmins
        })
        
    } catch (error) {
            next()
    }
}
