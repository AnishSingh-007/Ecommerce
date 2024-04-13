
const dotenv = require('dotenv');
const app = require('./app');
const connectDB = require('./configuration/mongodb');


// Load environment variables from .env file
// Error handling for dotenv configuration
dotenv.config({ path: './config.env' }, (err) => {
    if (err) {
        console.error('Error loading .env file:', err);
    }
});


// Connect to MongoDB
connectDB();

const port = process.env.PORT || 8080;

const server = app.listen(port, () => {
    console.log(`App running on port: ${port}`);
    console.log(`Database connection string: ${process.env.CONNECTION_STRING}`);
});

