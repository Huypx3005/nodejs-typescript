import { Request, Response } from 'express'

export const loginController = (req: Request, res: Response) => {
  console.log(req.body)
  const { email, password } = req.body

  if (email === 'Phamxuanhuy3005@gmail.com' && password === 'testpass123') {
    return res.json({
      message: 'Login success'
    })
  }

  return res.status(400).json({
    error: 'Login failed'
  })
}
