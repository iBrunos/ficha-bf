// models/toggle.js
const mongoose = require('mongoose');

const toggleSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
  },
  valor: {
    type: Boolean,
    required: true,
    default: false,
  },
});

const Toggle = mongoose.model('Toggle', toggleSchema);

module.exports = Toggle;