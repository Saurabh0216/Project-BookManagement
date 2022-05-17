const  express = require('express');
const router = express.Router();

//const express = require('express');
const userController = require("../controller/userController")
const bookcontroller = require("../controller/bookController")
const middlewares = require("../middleware/middleware")
const reviewController= require("../controller/reviewController")

router.post("/register",userController.createUser )
router.post("/login",userController.login )
//--------------authentication
router.post("/books",middlewares.authentication, bookcontroller.createBook)
router.get("/books",middlewares.authentication,bookcontroller.getBook)
router.get("/books/:bookId",middlewares.authentication,bookcontroller.getBooksById)
///---------authorization-----
router.put("/books/:bookId", middlewares.authentication,middlewares.authorization,bookcontroller.updateBooks)
router.delete("/books/:bookId",middlewares.authentication,middlewares.authorization,bookcontroller.deleteBook)
////---------reviews  routers--------/////
router.post("/books/:bookId/review",reviewController.createReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReviews)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)

module.exports = router