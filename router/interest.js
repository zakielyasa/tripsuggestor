const express = require('express')
const router = express.Router()
const models = require('../models')



router.get('/list', (req,res) =>{
  models.Interest.findAll({include: [models.Places]})
  .then(data => {
    res.send(data)
    // res.render('interest.ejs',{input: data})
  })
})

router.get('/list', (req,res) => {
  models.Interest.findAndCountAll({
    include: [
      {model: Places}
    ]})
})

router.get('/createInt', (req,res) => {
  res.render('createInt.ejs')
})

router.post('/list', (req,res) => {
    let objUser = {
      interest: req.body.interest
    }
    models.Interest.create(objUser)
    .then(data => res.redirect('/interest/list'))
  })

  router.get('/delete/:id' , (req,res) => {
    models.Interest.destroy ({where: {id: req.params.id}})
    .then(data => res.redirect('/interest/list'))
  })




module.exports = router
