import Users from './models'

const listAllUsers = async (req, res, next) => {
  try {
    return res.status(200).json({ users: await Users.find({}).lean().exec() })
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with users' })
  }
}

const createUser = async (req, res) => {
  const { first_name, last_name, email, created_date } = req.body
  const newUser = new Users({ first_name, last_name, email, created_date })

  try {
    return res.status(200).json({ user: await newUser.save({}) })
  } catch (e) {
    return res.status(e.status).json({ error: true, message: 'Error with create new user' })
  }
}

export { listAllUsers, createUser }