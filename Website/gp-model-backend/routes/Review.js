const { Router } = require("express");
const ReviewController = require("../controller/Review");
const ReviewValidation=require("../validation/AddReview")
const ReviewMiddleWare=require("../middelwares/authorization")
const ReviewRouter = Router();
ReviewRouter.get("/", ReviewController.GetReviews)
ReviewRouter.post("/",ReviewValidation.validatePostReview(),ReviewController.AddReview)
ReviewRouter.post("/endpoint",ReviewController.deleteReview)
module.exports = ReviewRouter;