const Todo = require('../models/todo')

const todosController = {
  findAll(req, res, next) {
    Todo.find((err, docs) => {
      if (err) {
        next(err)
      }

      res.json(docs)
    })
  },

  findById(req, res, next) {
    const {
      params: { id }
    } = req

    Todo.findById(id, (err, doc) => {
      if (err) {
        next(err)
      }

      if (doc) {
        res.json(doc)
      } else {
        res.sendStatus(404)
      }
    })
  },

  create(req, res, next) {
    const { body } = req

    const newTodo = new Todo(body)
    newTodo.save((err, doc) => {
      if (err) {
        next(err)
      }

      res.json(doc)
    })
  },

  deleteById(req, res, next) {
    const {
      params: { id }
    } = req

    Todo.findByIdAndRemove(id, (err, doc) => {
      if (err) {
        next(err)
      }

      if (doc) {
        res.json(doc)
      } else {
        res.sendStatus(404)
      }
    })
  }
}

module.exports = todosController
