import { PrismaClient} from "@prisma/client"
import { CategoryDto } from "../models"

const client = new PrismaClient()

export class CategoryService  {

    createCategory = async (category: CategoryDto) => {
        return await client.category.create({
            data: {
                name: category.name
            }
        })
    }

}

