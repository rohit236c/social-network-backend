require('dotenv').config();
require('./config/mongoose');
const express = require('express');


const app = express();
const router = express.Router();
app.use('/', require('./routes/index')(router));

const PORT = process.env.PORT || 2333;

app.get('/', (req, res, next) => {
    res.send('hey!! server is active now!!');
});

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
});