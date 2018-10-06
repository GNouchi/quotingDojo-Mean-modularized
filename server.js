const express = require('express');
const routes = require('./server/routes');
const app = routes(express());
const BgRed = "\x1b[41m\x1b[1m%s\x1b[0m";
const BgGreen = "\x1b[42m\x1b[1m%s\x1b[0m";


app.listen(8000,(err)=>err?console.log(BgRed,err ):console.log(BgGreen,'=====> listening on 8000'))

