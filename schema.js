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
  username: {
  }
})

module.exports = { URL, Counter }