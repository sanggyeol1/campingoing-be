const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authController = {};

//이메일 로그인
authController.loginWithEmail = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await User.findOne({ email })
        if (user) {
            const isMatch = bcrypt.compareSync(password, user.password)
            if (isMatch) {
                const token = user.generateToken()
                return res.status(200).json({ status: "success", user, token })
            }
        }
        throw new Error("아이디 또는 비밀번호가 일치하지 않습니다.")
    } catch (error) {
        res.status(400).json({ status: "fail", error: error.message })
    }
}

//구글 로그인
authController.loginWithGoogle = async (req, res) => { }

//인증
authController.authenticate = async (req, res, next) => {
    try {
        const tokenString = req.headers.authorization
        if (!tokenString) {
            throw new Error("토큰 값이 없습니다.")
        }

        const token = tokenString.replace("Bearer ", "")
        jwt.verify(token, JWT_SECRET_KEY, (error, payload) => {
            if (error) {
                throw new Error("invalid error");
            }
            req.userId = payload._id
            next();
        });

    } catch (error) {
        res.status(400).json({ status: "fail", error: error.message })
    }
}

//어드민 인가
authController.checkAdminPermission = async (req, res, next) => { }

module.exports = authController;
