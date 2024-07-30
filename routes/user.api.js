const express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller");
const authController = require("../controllers/auth.controller");

//회원가입
router.post(
  "/",
  userController.checkNickname,
  userController.createUser
);

//회원조회
router.get(
  "/me",
  authController.authenticate,
  userController.getUser
);

//닉네임 수정
router.put(
  "/",
  authController.authenticate,
  userController.checkNickname,
  userController.updateUser
);

//유저수정
router.put(
  "/:id",
  authController.authenticate,
  userController.updateUser
);

//유저삭제
router.delete(
  "/:id",
  authController.authenticate,
  userController.deleteUser
);


//관리자 -> 전체유저 조회
router.get(
  "/",
  authController.authenticate,
  authController.checkAdminPermission,
  userController.getUserList
);


module.exports = router;