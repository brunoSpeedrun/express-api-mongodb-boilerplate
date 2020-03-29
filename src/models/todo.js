const { Schema, model } = require('mongoose')

const todoSchema = new Schema(
  {
    name: { type: String, required: true, minlength: 3, maxlength: 50 },
    description: { type: String, required: false, maxlength: 225 },
    status: {
      type: String,
      enum: ['pending', 'complete', 'canceled'],
      default: 'pending'
    }
  },
  {
    timestamps: true
  }
)

const TodoModel = model('Todo', todoSchema)

module.exports = TodoModel
