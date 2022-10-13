import express from 'express'
import cors from 'cors'
import v1 from "./v1"

const router = express()

router.use(express.json())
router.use(express.urlencoded({ extended: true }))
router.use(cors())

router.use('/v1', v1)


export default router