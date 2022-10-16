import express from 'express'
import cors from 'cors'

import viewsRouter from "./views.routes"
import ceoRouter from "./ceo.routes"
import newsRouter from "./news.routes"
import adminRouter from "./admin.routes"
import streamRouter from "./stream.routes"
// import statsRouter from "./stats.routes"

const router = express()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors())

router.use('/view', viewsRouter)
router.use('/ceo', ceoRouter)
router.use('/admin', adminRouter)
router.use('/news', newsRouter)
router.use('/stream', streamRouter)
// router.use('/stats', statsRouter)          

export default router
