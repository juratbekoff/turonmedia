"use strict";
// import { NewsService } from "../../services"
// import { Request, Response, NextFunction } from "express"
// import { News } from "@prisma/client"
// const newsService = new NewsService()
// export const getNewsByID  = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         let id = +req.params.id
//         let IP = 'jurayasdbasid'
//         let findNews = await newsService.findNewsById(id)
//         if(!findNews) {
//             return res.status(404).send({
//                 message: `News not found width ID ${id}!`
//             })
//         } 
//         let findIp = await newsService.findIP(IP, id)
//         if(!findIp) {
//             await newsService.createIP(IP, id)
//             let countingViews = (await newsService.findIPs(id)).map(obj => obj.id).length
//             let updatedViews = await newsService.updatingViews(id, countingViews, new Date())
//             return res.status(200).send({
//                 message: `ID ${id} news!`,
//                 updatedViews
//             })
//         }
//         let oldNews = await newsService.findNewsById(id)
//         return res.status(200).send({
//             message: 'News!',
//             news: oldNews
//         })
//     } catch (error) {
//             next(error)
//     }
// }
// export const getAllNews = async (req: Request, res: Response, next: NextFunction) => {
//     try {
//         let allnews = (await newsService.getAllNews()).sort((a: News, b: News) => a.id + b.id).reverse()
//         return res.status(200).json({
//             message: 'All news',
//             count: allnews.length,
//             allnews
//         })
//     } catch (error) {
//         next(error)
//     }
// }
//# sourceMappingURL=news-statistics.js.map