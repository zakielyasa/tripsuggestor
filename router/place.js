const express = require('express')
const router = express.Router()
const models = require('../models')
const Places = models.Places

router.get(`/list`, (req, res) => {
    Places.findAll().then(dataPlaces => {
        res.render('place.ejs', {dataPlaces: dataPlaces})
    })
    .catch(err => {
        res.send(err)
    })
})

router.get('/list/add', (req, res) => {
    models.Interest.findAll().then(data => {
        res.render('createplace', {data: data})
    })
})

router.post('/list/add', (req, res) => {
    let objNewPlace = {
        name: req.body.name,
        latitude: String(req.body.latitude),
        longitude: String(req.body.longitude) 
    }
    
    models.Places.create(objNewPlace).then((data) => {
        models.places_interest.create({
            interest_id: req.body.interest_id,
            places_id: data.id
        }).then(()=> {
            res.redirect('/place/list')
        })    // res.send(data)
    })
})

router.get('/edit/:id', (req,res) => {
    Places.findById(req.params.id)
    .then(dataPlaces => {
      res.render('edit_place.ejs', {dataPlaces: dataPlaces})
    })
    .catch(err => {
        res.send(err)
    })
  })

router.post('/edit/:id', (req, res) => {
    let objUpdatePlace ={
        name: req.body.name,
        latitude: String(req.body.latitude),
        longitude: String(req.body.longitude)
    }
    Places.update(objUpdatePlace, {where: {id: req.params.id}}).then(() => {
        res.redirect('/place/list')
    })
})

router.get(`/delete/:id`, (req, res) => {
    Places.destroy({where: {id: req.params.id}})
    .then(() => {
        res.redirect('/place/list')
    })
})





module.exports = router
