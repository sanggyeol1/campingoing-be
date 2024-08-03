const Review = require("../models/Review");
const PAGE_SIZE = 10;

const reviewController = {};

//캠핑장 디테일 페이지에서 리뷰 조회
reviewController.getReview = async (req, res) => {
    try {
        const campingId = req.params.contentId
        let response = { status: "success" }
        const campingReviews = await Review.find({ campingId: campingId });

        
        response = {
            ...response,
            // totalPageNum,
            data: campingReviews,
        };
        res.status(200).json(response);
    } catch (err) {
        return res.status(400).json({ status: "fail", error: error.message });
    }
}

//마이페이지 -> 내 리뷰 조회
reviewController.getMyReview = async (req, res) => {
    try{
        const { userId } = req
        let response = { status: "success" }
        const myReviews = await Review.find({ userId: userId });
        response = {
            ...response,
            // totalPageNum,
            data: myReviews,
        };
        res.status(200).json(response);
    }catch(err){
        return res.status(400).json({ status: "fail", error: error.message });
    }
}

//마이페이지 -> 리뷰 작성
reviewController.createReview = async (req, res) => {
    try {
        //받아옴
        const { userId } = req
        const {
            campingId,//나중에 params로 빼야할듯?
            score, 
            content } = req.body

        //리뷰 생성
        const newReview = await new Review({
            userId,
            campingId,
            score,
            content,
        })

        await newReview.save()

        res.status(200).json({ status: "success", newReview });
    } catch (err) {
        res.status(400).json({ status: "fail", error: err.message })
    }
}

module.exports = reviewController;