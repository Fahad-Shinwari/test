const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    const random = req.query.number ? req.query.number : 1000
    try{
        const number = Math.floor(Math.random() * random);
        res.json({status:'success',number})
    }
    catch(e) {
        res.send({status:'failed',error:e})
    }
})

module.exports = router