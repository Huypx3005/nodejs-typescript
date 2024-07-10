import express, { NextFunction, Request, Response } from 'express'
import usersRouter from './routes/users.route'
import databaseService from './services/database.services'

const app = express()
const port = 3000
app.use(express.json())
app.use('/users', usersRouter)
databaseService.connect()

app.use((error: any, req: Request, res: Response, next: NextFunction) => {
  console.log(error)
  res.status(500).json({
    error: 'Internal Server Error'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
