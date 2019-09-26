const usersOnly = async (req,res,next) => {
    if(!req.session.user) {
        res.status(401).send('Please Log in')
    }
    next()
}

const adminsOnly = async (req,res,next) => {
    if(!req.session.user.isAdmin){
        res.status(403).send('Not Authorized')
    }
    next()
}

module.exports = {

    usersOnly,
    adminsOnly
}