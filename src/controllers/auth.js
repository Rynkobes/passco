exports.signInUser = (req, res) => {
    res.redirect('/login')
}

exports.signOut = (req, res) => {
    console.log(`You've been logged out`)
}

exports.dashboard = (req, res) => {
    req.oidc.isAuthenticated() ? 
        res.status(200).send({
            message: 'Welcome to Spoudazo',
            user: req.oidc.user.name
        }) :
        res.send('You are not Authenticated')
}