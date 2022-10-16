import { AdminService } from "../../services/index"
import { AdminDto, CeoDto } from "../../models"
import { Request, Response, NextFunction } from "express"

const adminService = new AdminService()

export const adminRegister = async (req: Request, res: Response, next: NextFunction) => {
    try {   
        
        const { name, username, password } = req.body

        const existsAdmin = await adminService.isAdminExicted(username)

        if(existsAdmin) {
            return res.status(403).json({
                message: `admin with username ${username} already exists.`
            })
        }

        const admin: AdminDto = {
            name,
            username,
            password
        }

        const createdAdmin = await adminService.createAdmin(admin)

        return res.status(201).json({
            message: `Ceo is created!`,
            admin_name: createdAdmin.name
        })

    } catch (err) {
            next(err)
    }
}

