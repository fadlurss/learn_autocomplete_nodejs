var express            = require('express'),
    mongoose           = require('mongoose'),
    bodyParser         = require('body-parser'),
    methodOverride     = require('method-override'),
    configDB           = require('./config/database'),
    autocompleteRoutes = require('./routes/routes_autocomplete');

app = express();
mongoose.connect(configDB.url, {useNewUrlParser: true});
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"));
app.use("/fruit",autocompleteRoutes);

app.get("*", function(req,res){
    res.send("404");
});

app.listen(5000, function(req,res){
    console.log("Server has started on port 5000");
});
