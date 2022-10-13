import express from 'express'
import cors from 'cors'
import router from "./routes/router"

import { serverConfig } from './configs/index'

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

app.use('/api', router)

try {

    app.listen(serverConfig.port, () => {
        console.log(`Server running on http://localhost:${serverConfig.port}`)
    })

} catch (error) {
    console.log(error);
}

