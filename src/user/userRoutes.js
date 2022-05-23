const { Router } = require("express")

const { signUp, listUsers, updateUser, deleteUser, login } = require("./userControlles")
const { hashPass, authenticate, authenticateEmail, tokenCheck } = require("../middleware")

const userRouter = Router()

userRouter.post("/user", authenticateEmail, hashPass, signUp)
userRouter.post("/user/login", authenticateEmail, authenticate, login)
userRouter.get("/user", listUsers)
userRouter.put("/user/:id", updateUser)
userRouter.delete("/user/:id", deleteUser)

userRouter.get("/token", tokenCheck, login);

module.exports = userRouter