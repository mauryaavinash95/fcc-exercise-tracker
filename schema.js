const mongoose = require('mongoose');

const User = mongoose.model('user', {
  username: {
    type: String,
    trim: true,
    required: true,
    unique: true
  }
})

const Exercise = mongoose.model('exercise', {
  userId: {
    type: String,
    trim: true,
    required: true,
  },
  description: {
    type: String,
    trim: true,
    required: true,
  },
  duration: {
    type: Number,
    trim: true,
    required: true,
  },
  date: {
    type: String,
    trim: true,
    required: true,
  },
})

module.exports = { User, Exercise }