exports.signInUser = (req, res) => {
    res.redirect('/login')
}

exports.signOut = (req, res) => {
    console.log(`You've been logged out`)
}