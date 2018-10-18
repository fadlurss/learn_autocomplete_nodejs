var mongoose = require('mongoose');
var fruitSchema = new mongoose.Schema({
    name: {
        type: String
    },
    class: {
        type: String
    }
});

var fruit = mongoose.model("Fruit", fruitSchema);
module.exports = fruit;

// var create_fruit = [
//     {
//         name : "Apple",
//         class : "Manoliopsida"
//     },
//     {
//         name : "Banana",
//         class: "Liliopsida"
//     }
// ]

// fruit.create(create_fruit,function(err, callback_fruit){
//         if(err){
//             console.log(err);
//         } else {
//             console.log(callback_fruit);
//         }
//     });