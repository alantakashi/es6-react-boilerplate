import express from 'express'
import http from 'http'
import fs from 'fs'
import { dbConfig, middlewaresConfig } from './config'
import { UsersRoutes } from './components'
const app = express()

dbConfig()
middlewaresConfig()

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Cache-Control, Key, Access-Control-Allow-Origin')
  next()
})
app.use('/v2', [UsersRoutes])
const port = process.env.PORT || 3000

http.createServer(app).listen(port, function (err) {
  if (err) return console.log(err)
  console.log(`API server running on port: ${port}`)
})