
// The most powerful schema description language and data validator for JavaScript.
const Joi = require('joi')

module.exports = {
  register (req, res, next) {
    const schema = Joi.object({
      email: Joi.string().email(),
      password: Joi.string().regex(/^[a-zA-Z0-9]{8,32}$/)
    })

    const { error } = schema.validate(req.body)

    if (error) {
      switch (error.details[0].context.key) {
        case 'email' :
          res.status(400).send({
            error: 'You must provide a validate email address'
          })
          break
        case 'password' :
          res.status(400).send({
            error: `The password provided failed to match the following rules : 
            <br/>
            1. It must contain ONLY following characters : lower case, upper case, numerics.
            <br/>
            2. It must be at least 8 characters in the length and not great then 32 characters. `
          })
          break
        default :
          res.status(400).send({
            error: 'Invalid registration information.'
          })
      }
    } else {
      next()
    }
  }
}
