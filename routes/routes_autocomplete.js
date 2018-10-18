var express = require('express')
    router  = express.Router()
    Fruits  = require('../models/Fruits')

    router.get("/new", (req,res)=>{
        res.render("index");
    });

    router.get('/get_name_fruit',(req,res)=>{
        Fruits.find({}, function(err, re){
            d = [];
            for (let ix = 0; ix < re.length; ix++) {
                d[ix] = re[ix].name;
            }
            res.json(d);
        });
        
    });

    router.post('/search_class_fruit',(req,res)=>{
        //    console.log(req.body.np);
            Fruits.find({'name':req.body.np},(e,r)=>{
                console.log(r);
                res.json(r);
            });
       });


    module.exports = router;