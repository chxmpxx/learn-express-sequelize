// import controllers review, product
const productController = require('../controllers/productController')
const reviewController = require('../controllers/reviewController')

// router
const router = require('express').Router()

// use router
router.post('/addProduct', productController.addProduct)
router.get('/allProduct', productController.getallProducts)
router.get('/published', productController.getPublishedProduct)

// Review Url and Controller
router.post('/addReview', reviewController.addReview)
router.get('/allReviews', reviewController.getAllReviews)

// get product Reviews
router.get('/getProductReview', productController.getProductReview)

router.get('/:id', productController.getOneProduct)
router.put('/:id', productController.updateProduct)
router.delete('/:id', productController.deleteProduct)

module.exports = router