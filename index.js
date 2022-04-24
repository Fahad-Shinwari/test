const express = require('express');
const morgan = require('morgan');

const numRoute = require('./route/numRoute')
const app = express();
app.use(morgan('dev'));
app.use(express.json())

app.use('/api',numRoute);

const port = 6000
app.listen(port,()=>{
    console.log(`App running on port ${port}...`);
})