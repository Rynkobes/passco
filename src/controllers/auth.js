const {expressjwt :jwt} = require('express-jwt');
const jwks = require('jwks-rsa');

exports.jwtCheck = jwt({
    secret: jwks.expressJwtSecret({
        cache: true,
        rateLimit: true,
        jwksRequestsPerMinute: 5,
        jwksUri: 'https://dev-afvqsvmc.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3000',
  issuer: process.env.ISSUERBASEURL,
  algorithms: ['RS256']
});

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