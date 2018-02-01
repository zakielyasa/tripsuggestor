function loginAuth(req, res, next){
    req.session.loggingIn = true
    req.session.user = {
        id: 1
    }
    if(req.session.loggingIn){
         next()
    } else{
        res.redirect('/')
    }
}
module.exports = {loginAuth: loginAuth}