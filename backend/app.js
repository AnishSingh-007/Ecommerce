const express = require('express'); 
const productRouter = require('./routes/productRoutes'); 
const userRouter = require('./routes/userRoutes'); 
const categoryRouter = require('./routes/categoryRoutes');
const cors = require('cors') // Import cors package

const app = express();

app.use(cors());// Use cors middleware to allow requests from different origins

app.use(express.json({ limit: '10mb' }));

app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.headers)
    next();
})

app.use('/app/v1/user', userRouter);
app.use('/app/v1/product', productRouter);
app.use('/app/v1/category', categoryRouter);



module.exports = app;