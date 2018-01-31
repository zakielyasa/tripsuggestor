function loginAuth(req, res, next){
    if(req.session.login){
        return next()
    } else{
        res.redirect('/login')
    }
}
module.exports = {loginAuth: loginAuth}