const bcrypt = require('bcryptjs')

function hashPassword (user, options) {
  const SLAT_FACTOR = 7
  if (!user.changed('password')) { return }

  const salt = bcrypt.genSaltSync(SLAT_FACTOR)
  const hash = bcrypt.hashSync(user.password, salt)

  return user.setDataValue('password', hash)
}

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define('User', {
    email: {
      type: Sequelize.STRING,
      unique: true
    },
    password: Sequelize.STRING
  }, {
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword
    }
  }
  )

  User.prototype.comparePassword = function (password) {
    console.log('thisis theste ', password, this.password)
    return bcrypt.compare(password, this.password, null)
  }

  return User
}
