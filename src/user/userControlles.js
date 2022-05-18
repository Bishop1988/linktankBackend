const User = require("./userModel")

exports.signUp = async (req, res) => {
    try {
        const newUser = await User.create(req.body)
        res.status(200).send({ username: newUser.username })
    } catch (err) {
        console.log(err)  
        res.status(500).send({ error: err.message })    
    }
}

exports.login = async (req, res) => {
    try {
        res.status(200).send({ user: req.user })
    } catch (err) {
        console.log(err)
    }
}

exports.listUsers = async (req, res) => {
    try {
        const users = await User.find({})
        res.status(200).send({ users })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.updateUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.updateOne(
            { _id: id },
            { username: req.body.username }
        )
        res.status(200).send({ user })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}

exports.deleteUser = async (req, res) => {
    const id = req.params.id
    try {
        const user = await User.deleteOne({ _id: id })
        res.status(200).send({ user })
    } catch (err) {
        console.log(err)
        res.status(500).send({ error: err.message })
    }
}