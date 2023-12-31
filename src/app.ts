import express, { json, Request, Response, NextFunction } from 'express'
import cors from 'cors'
import 'dotenv/config'

import oneInchRoutes from './routes/oneinch'

const app = express()

app.use(cors())

app.use(json())

app.use('/one-inch', oneInchRoutes)

app.use((_, res) => res.status(404).json({ message: 'Invalid Request' }))

app.use((err: Error, _: Request, res: Response, _2: NextFunction) => {
    res.status(500).json({ message: err.message })
})

app.listen(3000, () => console.log('Server is running'))
