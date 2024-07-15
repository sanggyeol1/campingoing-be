const { response } = require("express");
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;

const authController = {};

//이메일 로그인
authController.loginWithEmail = async (req, res) => { }

//구글 로그인
authController.loginWithGoogle = async (req, res) => { }

//인증
authController.authenticate = async (req, res, next) => { }

//어드민 인가
authController.checkAdminPermission = async (req, res, next) => { }

module.exports = authController;
