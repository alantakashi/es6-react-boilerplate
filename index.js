require('module-alias/register')
// Transpile all code following this line with babel and use 'env' (aka ES6) preset.
require('babel-register')({
  presets: [ 'env', 'stage-2' ]
})

// Import the rest of our application.
require('./server.js')
