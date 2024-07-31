import { Request, Response } from 'express'
import { todoList } from '@root/index'

export default (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const todoIndex = todoList.findIndex((todo) => todo.id === id)

  if (todoIndex === -1) {
    res.status(404)
    res.send('Todo not found')

    return
  }

  todoList.splice(todoIndex, 1)
  res.send(`delete todo ${id}`)
}
