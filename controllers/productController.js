const db = require('../models')

// create main Model
const Product = db.products
const Review = db.reviews

// main work

// 1. create product
const addProduct = async (req, res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product);
}

// 2. get all products
const getallProducts = async (req, res) => {
    let products = await Product.findAll({
        // ถ้าจะให้ส่งมาแค่ 2 ค่า
        // attributes: [
        //     'title',
        //     'price'
        // ]
    })
    res.status(200).send(products)
}

// 3. get single product
const getOneProduct = async (req, res) => {
    let id = req.params.id
    let product = await Product.findOne({ where: { id: id }})
    res.status(200).send(product)
}

// 4. update product
const updateProduct = async (req, res) => {
    let id = req.params.id
    const product = await Product.update(req.body, {where: { id: id }})
    res.status(200).send(product)
}

// 5. delete single product
const deleteProduct = async (req, res) => {
    let id = req.params.id
    await Product.destroy({ where: { id: id } })
    res.status(200).send('Product is delete!')
}

// 6. get published product
const getPublishedProduct = async (req, res) => {
    let products = await Product.findAll({ where: { published: true } })
    res.status(200).send(products)
}

// 7. connect 1 to many relation Product and Review
const getProductReview = async (req, res) => {
    const data = await Product.findAll({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { id: 2 }
    })
    res.status(200).send(data)
}

module.exports = {
    addProduct,
    getallProducts,
    getOneProduct,
    updateProduct,
    deleteProduct,
    getPublishedProduct,
    getProductReview
}