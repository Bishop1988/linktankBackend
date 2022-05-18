const bcrypt = require("bcryptjs")
const User = require("../user/userModel")

exports.hashPass = async (req, res, next) => {
    try {
        req.body.pass = await bcrypt.hash(req.body.password, 8)
        next()
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.authenticate = async (req, res, next) => {
    const account = await User.findOne({ email: req.body.email })
    if (!account) {
        return res.status(500).send('cannot find user')
    }
    try {
        if (await bcrypt.compare(req.body.password, account.password)) {
            req.user = account
            next()
        } else {
            res.status(500).send("Invalid password")
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.authenticateEmail = async (req, res, next) => {
    const email = req.body.email
    let mail_format = /.+\@.+\..+/

    try {
        if (!email.match(mail_format)){
            res.status(500).send('Please enter a valid email')
        } else {
            next()
        }
    } catch (err) {
        console.log(err)
        res.status(500).send({ message: err.message })
    }
}