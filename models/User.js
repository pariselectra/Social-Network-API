const { Schema, model } = require('mongoose');
const friendSchema = require('./Friend')

// Schema for what makes up a friend
const userSchema = new Schema(
  {
  first: {
    type: String,
    required: true,
    max_length: 50,
  },
  friends: [friendSchema],
},
{
  toJSON: {
    getters: true,
  },
}
);

// Initialize the Friend model
const User = model('user', userSchema);

module.exports = User;
