let todos = [
  {
    id: 1,
    name: 'Js Course'
  },
  {
    id: 2,
    name: 'Nestjs Course'
  }
]

const todosController = {
  getTodos(req, res) {
    res.json(todos)
  },

  getById(req, res) {
    const {
      params: { id }
    } = req

    const todo = todos.find((todo) => todo.id == id)

    if (todo) {
      res.json(todo)
    } else {
      res.sendStatus(404)
    }
  },

  deleteById(req, res) {
    const {
      params: { id }
    } = req

    const length = todos.length

    todos = todos.filter((todo) => todo.id != id)

    if (todos.length === length) {
      res.sendStatus(404)
    } else {
      res.sendStatus(204)
    }
  }
}

module.exports = todosController
