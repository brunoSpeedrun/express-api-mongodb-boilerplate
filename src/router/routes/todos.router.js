const todosController = require('../../controllers/todos.controller')

module.exports = {
  path: '/todos',
  routes: [
    {
      path: '/',
      method: 'GET',
      handle: todosController.findAll
    },
    {
      path: '/:id',
      method: 'GET',
      handle: todosController.findById
    },
    {
      path: '/',
      method: 'POST',
      handle: todosController.create
    },
    {
      path: '/:id',
      method: 'DELETE',
      handle: todosController.deleteById
    }
  ]
}
