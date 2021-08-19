
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodschema = new Schema({
    name:{type:String},
    descrition: { type: String },
    price: { type: Number },
    inStock:{type:Boolean},
    
});

module.exports =  mongoose.model('Products', prodschema)