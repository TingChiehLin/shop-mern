const express = require('express')
const dotenv = require('dotenv').config()
const {errorHandler} = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const port = process.env.PORT || 5001
const bodyParser = require('body-parser');
const shopListRoute = require('./routes/shoplistRoutes')

connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: false}))
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

app.use('/shoplist', shopListRoute)

app.use(errorHandler)

app.listen(port, () => console.log(`server running: ${port}`))

