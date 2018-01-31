const express = require('express')
const router = express.Router()
// const sequelize = require('sequelize')
const models = require('../models')

router.get('/login', (req,res) => {
  // res.send('tembak tidak ya')
  res.render('login')
})

router.post('/login', (req,res) => {
  models.User.findOne({
    where: {
      username: req.body.username
    }
  }).then(User => {
    if (User) {

    }
    else {

    }
  }).catch(err => {
    console.log(err);
  })
})


router.get('/register', (req,res) => {
  res.render('register')
})

module.exports = router
