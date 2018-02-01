//Library
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const model = require('./models')
const session = require('express-session')
const loginAuth = require('./helper/loginAuth').loginAuth
// const cookieParser = require('cookieParser')
// const session = require('express-session');
// const morgan = require('morgan')

//modelconst
const user = require('./router/user.js')
const interest = require('./router/interest.js')
const index = require('./router/index.js')
const place = require('./router/place.js')

app.set('view engine' , 'ejs')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(session({
     secret: 'keyboard cat'
    }))

app.use('/', index)
app.use('/user', user)
app.use('/interest', interest)
app.use('/place', place)



app.listen(3000, () => console.log('CUUSSSSS di 3000'))
