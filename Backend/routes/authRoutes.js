import express from 'express'
import { register, login, check } from '../controllers/authControll.js'

const router = express.Router()
router.get("/", check)
router.post("/register", register)
router.post("/login", login)


export default router
