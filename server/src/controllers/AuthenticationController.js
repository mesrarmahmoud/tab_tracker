const { User } = require('../models')
const config = require('../config/config')
const jwt = require('jsonWebToken')

function jwtSignToken (user) {
  const ONE_WEEK = 60 * 60 * 24 * 7
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK
  })
}

module.exports = {
  async register (req, res) {
    try {
      console.log(req.body)

      const user = await User.create(req.body)
      // you can now access the newly created user
      console.log('success', user)
      res.send(user.toJSON())
    } catch (err) {
      // print the error details
      console.log(err)
      res.status(400).send({
        error: 'This email account is already in use.'
      })
    }
  },
  async login (req, res) {
    try {
      const { email, password } = req.body
      const user = await User.findOne({
        where: {
          email
        }
      })
      console.log(password, user.comparePassword(password))
      const isPasswordValid = user.comparePassword(password)
      if (!user || !isPasswordValid) {
        return res.status(403).send({
          error: 'The login information was incorrect'
        })
      }
      const userJSON = user.toJSON()
      res.send({
        user: userJSON,
        token: jwtSignToken(userJSON)
      })
    } catch (err) {
      // print the error details
      res.status(500).send({
        error: 'An error has occured trying to login.'
      })
    }
  }

}
