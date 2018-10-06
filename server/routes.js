const api = require('./api');
const bp = require('body-parser');
const session = require('express-session');
const flash = require('express-flash');

module.exports = function(app){
    app.set('views', __dirname + '/views');
    app.set('view engine', 'ejs');
    app.use(bp.urlencoded({extended:true}));
    app.use(session({
        secret: 'blackcoffee',
        resave: false,
        saveUninitialized: true,
        cookie: { maxAge: 60000 }
      }))
    app.use(flash());

    app.get('/', api.index)
    app.get('/quotes', api.allQuotes)
    app.post('/quotes', api.createQuote)

    return app;
}