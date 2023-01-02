const express = require('express')
// Cross-Origin Resource Sharing
const cors = require('cors')

const app = express()

var corOption = {
    origin: 'https://localhost:8081'
}

// middleware
app.use(cors(corOption))

// แปลงข้อมูลที่มีรูปแบบ JSON String ให้อยู่ในรูป JSON Object 
app.use(express.json())

// แปลงข้อมูลจาก form ในรูปแบบ url encode เป็น Object
app.use(express.urlencoded({ extended: true }))

// router
const router = require('./routes/productRouter')
app.use('/api/products', router)

//testing api
app.use('/', (req, res) => {
    res.json({ message: 'hello from api' })
})

// port
const PORT = process.env.PORT || 8080

// server
app.listen(PORT, () => {
    console.log('server is running on port ', PORT);
})

