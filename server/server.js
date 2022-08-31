import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'
import collegeRoutes from './routes/collegeRoutes.js'
import studentRoutes from './routes/studentRoutes.js'

dotenv.config()
connectDB()

const app = express()

app.use('/api/colleges', collegeRoutes)
app.use('/api/students', studentRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
      console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV} mode`)
})