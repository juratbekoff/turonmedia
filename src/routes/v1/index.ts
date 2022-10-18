import express from 'express'
import cors from 'cors'

import viewsRouter from "./views.routes"
import ceoRouter from "./ceo.routes"
import newsRouter from "./news.routes"
import adminRouter from "./admin.routes"
import streamRouter from "./stream.routes"
import balansRouter from "./balans.routes"
import widthdrawRouter  from "./widthdraw.routes"
import dashboardRouter from "./dashboard.routes"

const router = express()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors())

router.use('/view',     viewsRouter)
router.use('/ceo',      ceoRouter)
router.use('/admin',    adminRouter)
router.use('/news',     newsRouter)
router.use('/stream',   streamRouter)
router.use('/balans',   balansRouter)
router.use('/widthdraw', widthdrawRouter)
router.use('/dashboard', dashboardRouter)


export default router
