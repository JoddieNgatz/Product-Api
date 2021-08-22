
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var prodschema = new Schema({
    title: {type:String,required:true},
    description: {type:String,required:true},
    imageUrl: {type:String,required:true},
    price: {type:Number,required:true},
    inStock:{type:Boolean},
    
});

module.exports =  mongoose.model('Products', prodschema)