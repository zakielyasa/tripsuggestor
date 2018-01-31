const express = require('express')
const router = express.Router()
const models = require('../models')
const bcrypt = require('bcrypt')

router.get('/', (req,res) => {
  res.send('WELCOME TO INTEREST ADVISOR')
})

router.get('/list', (req,res) =>{
  models.User.findAll()
  .then(data => {
    res.render('user.ejs',{input: data})
  })
})

router.get('/createuser', (req,res) => {
  res.render('createuser.ejs')
})

router.post('/list', (req,res) => {
    let objUser = {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password
    }
    models.User.create(objUser)
    .then(data => res.redirect('/user/list'))
  })

router.get('/edit/:id', (req,res) => {
  models.User.findById(req.params.id)
  .then(data => {
    res.render('edit.ejs', {data: data})
  })
})

router.post('/edit/:id', (req,res) => {
  let objUser = {
    name: req.body.name,
    username: req.body.username,
    password: req.body.password
  }
  models.User.update(objUser, {where : {id : req.params.id}})
  .then(data => res.redirect('/user/list'))
})

router.get('/delete/:id' , (req,res) => {
  models.User.destroy ({where: {id: req.params.id}})
  .then(data => res.redirect('/user/list'))
})

router.get('/login', (req,res) => {
  res.render('login')
})

router.post('/login', (req,res) => {
  // res.send(req.body)
  models.User.findOne({where: {username: req.body.username}}).then(user => {
    // const saltRounds = 10;
    // const myPlaintextPassword = 'user.password';
    // return bcrypt.hash(myPlaintextPassword, saltRounds).then(hash => {
    //   user.password = hash
    // console.log(user.password);
    // console.log(user.password);
      bcrypt.compare(req.body.password, user.password).then((result) => {
        // console.log(result)
        if(result){
        res.redirect('/interest')
        } else {
          console.log('Invalid password or username')
        }
      })
  }).catch(err => {
    console.log(err);
  })
})







module.exports = router
