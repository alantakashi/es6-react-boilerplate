import { Router } from 'express'
import { listAllUsers, createUser } from './controllers'

const routes = new Router()
routes.get('/users', listAllUsers)
routes.post('/user', createUser)

export default routes