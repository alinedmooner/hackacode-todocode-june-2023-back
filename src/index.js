import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import attractionRoutes from './routes/attractionRoutes.js'
import employeesRoutes from './routes/employeeRoutes.js'
import customerRoutes from './routes/customerRoutes.js'
import categoryRoutes from './routes/categoryRoutes.js'
import cors from 'cors'

dotenv.config()

connectDB()

const port = process.env.PORT || 6173

const app = express()

app.use(cors())

app.use('/api/attractions', attractionRoutes)

app.use('/api/employees', employeesRoutes)

app.use('/api/customers', customerRoutes)

app.use('/api/categories', categoryRoutes)

app.use(notFound)

app.use(errorHandler)

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
