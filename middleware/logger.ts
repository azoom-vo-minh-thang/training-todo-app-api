import { Request, Response, NextFunction } from 'express'

export default (req: Request, _res: Response, next: NextFunction) => {
  const timestamp = new Date().toISOString()
  console.log(`${req.method} ${req.url} ${timestamp}`)
  
  next()
};
