const express = require("express");
const router = express.Router();
const reviewController = require("../controllers/review.controller");
const authController = require("../controllers/auth.controller");

//리뷰 작성
router.post(
    "/",
    authController.authenticate,
    reviewController.createReview
);

//리뷰조회
router.get(
    "/",
    authController.authenticate,
    reviewController.getReview
);

//내가 작성한 리뷰조회
// router.get(
//     "/me",
//     authController.authenticate,
//     reviewController.getReview
// );


module.exports = router;