// index.js - carrega automaticamente todos os exercícios (.js) nesta pasta
const fs = require('fs');
const path = require('path');

const files = fs.readdirSync(__dirname).filter(f => f.endsWith('.js') && f !== 'index.js');
const exercises = {};

for (const file of files) {
  const key = path.basename(file, '.js');
  exercises[key] = require(path.join(__dirname, file));
}

module.exports = exercises;
