const User = require("../models/User");
const bcrypt = require("bcryptjs");

const userController = {};

//닉네임 중복검사
userController.checkNickname = async (req, res, next) => {}

//유저정보 조회
userController.getUser = async (req, res) => { };

//회원가입
userController.createUser = async (req, res) => { }

//회원정보수정
userController.updateUser = async (req, res) => { }

//회원탈퇴
userController.deleteUser = async (req, res) => { }

//어드민 -> 전체회원리스트 조회
userController.getUserList = async (req, res) => { }


module.exports = userController;
