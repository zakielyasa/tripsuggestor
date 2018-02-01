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
  models.user_places.findAll({
    include: [models.Places],
    where:{user_id: req.session.user.id}
  }).then(data => {
    res.render('wishlist', {user_places: data})
    // res.send(data)
  })
})

router.get('/create_wishlist/:id', (req, res) => {
  models.user_places.create({
    user_id: req.session.user.id,
    places_id: req.params.id
  }).then(user_places => {
    res.redirect('/interest/wishlist')
  })
  // res.send(req.session)
})

router.post('/add_rating/:id', (req, res) => {
  models.user_places.update({
    rating: req.body.rating
  }, {where: {id: req.params.id}}).then(() => {
    res.redirect('/interest/wishlist')
  })
})

router.post('/add_review/:id', (req, res) => {
  models.user_places.update({
    review: req.body.review
  }, {where: {id: req.params.id}}).then(() => {
    res.redirect('/interest/wishlist')
  })
})

router.get('/places_interest/:id/review', (req, res) => {
  models.user_places.findAll({include: [models.User],
    where:{
      places_id:req.params.id  
    }
  }).then(data => {
    // res.send(data)
    data = data.filter(e => {
      // console.log()
      return e.review != null
    })
    res.render('review', {data: data})
  })
})

module.exports = router
