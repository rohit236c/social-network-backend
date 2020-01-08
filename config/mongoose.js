const mongoose = require('mongoose');
require('dotenv').config();

mongoose
    .connect(process.env.DATABASE, {
    useMongoClient: true,
})
    .then(() => {
        console.log(`db connected at ${process.env.DATABASE}`);
    })
    .catch(err => console.log(err));