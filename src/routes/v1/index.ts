import express from 'express'
import cors from 'cors'
import ceoRouter from "./ceo.routes"

const router = express()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors())

router.use('/ceo', ceoRouter)


export default router