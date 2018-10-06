const mongoose = require('mongoose');
mongoose.connect(
    'mongodb://localhost/quotingdojo',
    {useNewUrlParser:true},
    (err)=> err?console.log(star,err):console.log("====> db running fine"),    
    )

var QuoteSchema = new mongoose.Schema({
    name:
    {
        type:String,
        required : true,
        minlength : 2 
    },
    quote:
    {
        type:String,
        required:true,
        minlength:3
    }
},{timestamps:true})

module.exports = mongoose.model('Quote', QuoteSchema);
