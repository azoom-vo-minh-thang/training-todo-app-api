import { Request, Response } from 'express'
import { todoList } from '@root/index'

export default (req: Request, res: Response) => {
  const { status } = req.query

  let filteredTodoList = todoList

  if (status) {
    const filterStatus = Number(status)
    filteredTodoList = filteredTodoList.filter((todo) => todo.status === filterStatus)
  }

  res.send({
    data: filteredTodoList,
  })
}
