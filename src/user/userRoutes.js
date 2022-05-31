const { Router } = require("express")

const { signUp, getUser, updateUser, updateUserLinkUrl, updateUserLinkSocialName, deleteUser, deleteLink, login } = require("./userControlles")
const { hashPass, authenticate, authenticateEmail, tokenCheck } = require("../middleware")

const userRouter = Router()

userRouter.post("/user", authenticateEmail, hashPass, signUp)
userRouter.post("/login", authenticateEmail, authenticate, login)
userRouter.post("/user/getUser", getUser)
userRouter.put("/user", updateUser)

userRouter.delete("/user", deleteUser)

userRouter.put("/user/link", deleteLink)
userRouter.put("/user/linkUrl", updateUserLinkUrl)
userRouter.put("/user/linkSocial", updateUserLinkSocialName)

// userRouter.get("/user", tokenCheck, login);

module.exports = userRouter
