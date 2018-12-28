import express from 'express'
import http from 'http'
import path from 'path'
import logger from 'morgan'
import bodyParser from 'body-parser'
import passport from 'passport'
import { middlewaresConfig } from '@Config'

const port = process.env.PORT || 3000
const app = express()

middlewaresConfig()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname, 'public')))
app.use(passport.initialize())

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '/public/index.html'))
})

http.createServer(app).listen(port, function (err) {
  if (err) return console.log(err)
  console.log(`API server running on port: ${port}`)
})
