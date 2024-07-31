import express from 'express'
import nnn from 'nnn-router'
import logger from '@middleware/logger'
import { Todo } from '@root/types'
import { todoJson }  from '@root/dummy/todo'

export const todoList = todoJson as Todo[]
const port = 3000

const app = express()
app.use(logger)
app.use(express.json())
app.use(nnn({
  routeDir: '/dist/routes',
}))

app.listen(port, () => {
  console.log(`Listening on port ${port} (http://localhost:${port})`)
})
