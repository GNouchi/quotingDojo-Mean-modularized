const BgFail = "\x1b[41m\x1b[1m%s\x1b[0m";
const BgSuccess = "\x1b[42m\x1b[1m%s\x1b[0m";
const BgRoute = "\x1b[45m\x1b[1m%s\x1b[0m";
const FgYellow = "\x1b[33m\x1b[1m";
const BgBlue = "\x1b[44m\x1b[1m\x1b[37m";
const star =()=>console.log(FgYellow,'*'.repeat(50));
const line =(obj)=>console.log(BgBlue,'-'.repeat(50),{obj});

// inject models
const Quote = require('./models');

module.exports = 
{
    index:(req,res)=>{
        console.log(BgRoute,'hit index');        
        res.render('index');
    },
    createQuote:(req,res)=>{
        console.log("hit create quote");
        Quote.create(req.body, 
            (err, newquote)=>{
                if(err){
                    star();  
                    for(let key in err.errors){
                        console.log(key,'==> :', err.errors[key].message);
                        req.flash(key, err.errors[key].message);
                    }
                    res.redirect('/');
                }
                else{
                    console.log(newquote);
                    console.log("create successful");                                
                    res.redirect('/quotes');
                }
        });
    },
    allQuotes:(req,res)=>{
        Quote.find({}).sort({createdAt: -1})
            .then((data)=>{console.log(data);
             res.render('allQuotes',{allQuotes:data})})
            .catch((err)=>{res.render('allQuotes',{errors:err})})
    }

} 