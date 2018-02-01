function loginAuth(req, res, next){
    if(req.session.loggingIn){
         next()
    } else{
        res.redirect('/')
    }
}
module.exports = {loginAuth: loginAuth}