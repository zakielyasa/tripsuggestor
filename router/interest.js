const express = require('express')
const router = express.Router()
const models = require('../models')


router.get('/', (req,res) => {
  res.send('Its a interest page')
})

router.get('/list', (req,res) =>{
  models.Interest.findAll()
  .then(data => {

    res.render('interest.ejs',{input: data})
  })
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


router.get('/places_interest', (req, res) => {
  // res.render('places_interest')
  models.Interest.findAll({include: [models.Places]})
  .then(data => {
    // res.send(data)
    res.render('interest',{input: data})
  })
})

router.post('/places_interest/', (req, res) => {
  models.Interest.findAll({include: [models.Places], where: {id: req.body.id_contact}})
  .then(data => {
    // res.send(data[0].Places[0].name)
    res.render('places_interest',{input: data})
  })

})

// router.get('/places_interest/detail_place', (req, res) => {
//
// })

router.get('/create_wishlist', (req,res) => {
    res.render('wishlist.ejs')
})

router.post('/create_wishlist', (req, res) => {
  let objNewWishlist = {
    wishlist: req.body.wishlist
  }
  models.user_places.create(objNewWishlist).then(() => {
    res.redirect('/places_interest')
  })

})

router.get('/places_interest/:id/detail_place', (req, res) => {
  models.Places.findById(req.params.id).then(detail => {
    res.render('detail_place', {detail: detail})
  })
})

router.get('/wishlist', (req, res) => {
  models.Places.findAll().then(data => {
    res.render('wishlist', {input: data})
  })
})




module.exports = router
