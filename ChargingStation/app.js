const express = require('express');
const app = express();
const addressAPI = require('./api/address');

app.use('/address', addressAPI);
const port = process.env.PORT || 3000;
app.listen(port, ()=>{console.log(`Listening to port ${port}...`)});