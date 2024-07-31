import { Request, Response } from 'express'
import { Todo, TodoStatus } from '@root/types'
import { todoList } from '@root/index'

const validateTodoPayload = (data?: Todo): false | Todo => {
  if (!data) {
    return false
  }

  const { description, status } = data as Todo
  const validStatus = [TodoStatus.done, TodoStatus.todo]

  if (typeof description !== 'string' || !validStatus.includes(status)) {
    return false;
  }

  const id = Math.floor(Math.random() * 1000)

  return {
    id,
    description,
    status,
  }
}

export default (req: Request, res: Response) => {
  const todoPayload = validateTodoPayload(req.body)

  if (!todoPayload) {
    res.status(400)
    res.send('Invalid input data')

    return
  }

  todoList.push(todoPayload)
  res.send(todoPayload)
}
