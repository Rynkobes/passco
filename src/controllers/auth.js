exports.signInUser = (req, res) => {
    res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Kindly login to continue');

}

exports.signUpUser = (req, res) => {
    console.log(`You just signed up to the best BECE & WASSCE Preparation portal in the world`)
}

exports.signOut = (req, res) => {
    console.log(`You've been logged out`)
}