import express from "express";
import { changePassword, forgetPassword, logOut, login, register, sendMail } from "../controller/userController.js";
import { admin, protect } from "../middleware/authMiddleware.js";


const router = express.Router()

router.post('/send-email', protect, admin, sendMail)

//register

router.post('/register', register)


//login
router.post('/login', login)


//forget password
router.post('/forget-password', forgetPassword)


//change password
router.post('/change-password', changePassword)


//logout 
router.post('/logout', logOut)









export default router