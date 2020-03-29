const todosController = require('../todos.controller')

module.exports = {
  path: '/todos',
  routes: [
    {
      path: '/',
      method: 'GET',
      handle: todosController.getTodos
    },
    {
      path: '/:id',
      method: 'GET',
      handle: todosController.getById
    },
    {
      path: '/:id',
      method: 'DELETE',
      handle: todosController.deleteById
    }
  ]
}
