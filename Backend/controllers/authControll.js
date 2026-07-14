import User from '../models/User.js';
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const check = async(req, res) => {
    res.status(200).json({
        message : "hello world"
    })
}

export const register = async (req, res) => {
    const { name, email, password } = req.body;

    const exist = await User.findOne({ email })
    if (exist) {
        return res.status(400).json({
            message: "user already exist"
        })
    }

    const hash = await bcrypt.hash(password, 10)

    const user = await User.create({
        name,
        email,
        password: hash
    })

    res.json(user)
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email })
    if (!user) {
        return res.status(404).json({
            message: "email not found"
        })
    }

    const match = await bcrypt.compare(password, user.password)
    if (!match) {
        return res.status(401).json({
            message: "wrong password"
        })
    }

    const token = jwt.sign(
        {id: user._id,
        name: user.name},
        process.env.JWT_SECRET
    )

    res.json({
        token
    });
}