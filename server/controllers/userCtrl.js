const User = require('../db/index').User;

module.exports = {

  addUser: ((req, res) => {
    const profilePicture = req.body.profilePicture || 'https://goo.gl/Vmv1zN';
    User.create({
        nickname: req.body.nickname,
        email: req.body.email,
        password: req.body.password,
        profilePicture
      })
      .then(user => res.status(201).send(user))
      .catch(err => res.status(500).send(`Error adding user to db! ${err}`))
  }),

  getUser: ((req, res) => {
    User.find({
        where: {
          email: req.query.email
        }
      })
      .then(user => res.status(200).send(user))
      .catch(err => res.status(500).send(`Error finding user! ${err}`))
  }),

  getAllUser: ((req, res) => {
    User.findAll({})
      .then(users => res.status(200).send(users))
      .catch(err => res.status(500).send(`Error finding users! ${err}`))
  })

}