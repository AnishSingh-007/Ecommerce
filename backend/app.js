const express = require('express'); 
const ecommerceRouter = require('./routes/ecommerceRoutes'); 

const app = express();

app.use(express.static(`${__dirname}/public`))

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    // console.log(req.headers)
    next();
})

app.use('/app/v1/ecommerce', ecommerceRouter);

module.exports = app;