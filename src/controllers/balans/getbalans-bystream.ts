import {  BalansService } from "../../services"
import { Request, Response, NextFunction } from "express"

const balansService = new BalansService()

export const getBalansByStreams = async (req: Request, res: Response, next: NextFunction) => {
    try {

        let adminId = +req.params.adminId

        let findAdmin = await balansService.getBalansByStream(adminId)        
    
        if(findAdmin.length === 0) {
            return res.status(404).send({
                message: `ID ${adminId} didn't create stream yet!`
            })
        } 
       
        let mapping = findAdmin.map((obj) => {
            const stream_url = obj.stream_url
            const earn_money = obj.balans.map(obj => obj.amount).reduce((acc, curr) => acc + curr)
            const views = obj.views.map(obj => obj.id).length

            return {
                stream_url,
                earn_money,
                views
            }
        })

        let total_earnings = mapping.map(obj => obj.earn_money).map(obj => obj).reduce((acc, curr) => acc + curr)
        let admin = findAdmin.map(obj => obj.admin?.name).find(adminName => adminName)

        return res.status(200).json({
            message: `ID ${adminId} admin's balans statistsics by streams!`,
            admin,
            total_earnings,
            stats: mapping
        })

    } catch (error) {
            next()
    }
}

