const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {};

//닉네임 중복검사
userController.checkNickname = async (req, res, next) => {
    let { nickname } = req.body

    const existNickname = await User.findOne({ nickname })
    if (existNickname) {
        return res.status(400).json({ error: 'nickname already exists' });
    }

    next();
}

//유저정보 조회
userController.getUser = async (req, res) => { };

//회원가입
userController.createUser = async (req, res) => {
    try {
        let { email, nickname, password, level, contact, profileImg } = req.body

        const existEmail = await User.findOne({ email })          // 전달 받은 이메일로 기존 가입이 있는지 확인하기
        if (existEmail) {
            throw new Error("user email already exist")
        }

        const salt = await bcrypt.genSaltSync(10)
        password = await bcrypt.hash(password, salt)            // 암호화된 password로 재정의
        const newUser = new User({ email, password, nickname, contact, profileImg, level: level ? level : 'customer' })

        await newUser.save()
        return res.status(200).json("createUser success")
    } catch (error) {
        res.status(400).json({ status: "createUser fail", error: error.message })
    }
}

//회원정보수정
userController.updateUser = async (req, res) => { }

//회원탈퇴
userController.deleteUser = async (req, res) => { }

//어드민 -> 전체회원리스트 조회
userController.getUserList = async (req, res) => { }


module.exports = userController;
