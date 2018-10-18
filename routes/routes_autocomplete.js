var express = require('express')
    router  = express.Router()
    Fruits  = require('../models/Fruits')

    router.get("/new", (req,res)=>{
        res.render("index");
    });

    router.get("/contoh",(req,res)=>{
        Fruits.find({}, function(err,re){
            d = [];
            for (let ix = 0; ix < re.length; ix++){
                d[ix] = re[ix].name;
            }
            res.json(d);
        });
    });


    module.exports = router;