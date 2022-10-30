import { CategoryService } from "../../services/index"
import { Request, Response, NextFunction } from "express"
import { CategoryDto } from "../../models"

const categoryService = new CategoryService()

export const createCategory  = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let name: CategoryDto = req.body
        
        let createdCategory = await categoryService.createCategory(name)
        
        return res.status(200).json({
            message: `Category creteated!`,
            id: createdCategory.id
        })
        
    } catch (error) {
        next(error)
    }
}
