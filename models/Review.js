const mongoose = require("mongoose");
const User = require("./User");
const Schema = mongoose.Schema;

const reviewSchema = Schema(
    {
        userId: {
            type: mongoose.ObjectId,
            ref: User,
        },
        CampingId: {
            // type: ,
            // ref: 캠핑장,
        },
        score: { // 별점
            type: Number,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        likes: [{
            type: mongoose.ObjectId, 
            ref: User
        }]
        
    }, { timestamps: true }
);

reviewSchema.methods.toJSON = function () {
    const obj = this._doc;
    delete obj.__v;
    delete obj.updatedAt;
    delete obj.createdAt;
    return obj;
};


const Review = mongoose.model("Review", reviewSchema);
module.exports = Review;
