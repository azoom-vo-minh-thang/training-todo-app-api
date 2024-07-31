import { Request, Response } from 'express'
import { Todo, TodoStatus } from '@root/types'
import { todoList } from '@root/index'

const validateTodoPayload = (data?: Partial<Todo>): false | Partial<Todo> => { 
  if (!data) {
    return false
  }

  const validStatus = [TodoStatus.done, TodoStatus.todo]
  const { description, status } = data

  if (description && typeof description !== 'string') {
    return false
  }

  if (status && !validStatus.includes(status)) {
    return false
  }

  return {
    ...(description && { description }),
    ...(status && { status }),
  }
}

export default (req: Request, res: Response) => {
  const id = Number(req.params.id)
  const todoIndex = todoList.findIndex((todo) => todo.id === id)

  if (todoIndex === -1) {
    res.status(404)
    res.send('Todo not found')

    return
  }

  const todoPayload = validateTodoPayload(req.body)

  if (!todoPayload) {
    res.status(400)
    res.send('Invalid input data')

    return
  }

  todoList[todoIndex] = {
    ...todoList[todoIndex],
    ...todoPayload,
  }

  res.send(todoList[todoIndex])
}
