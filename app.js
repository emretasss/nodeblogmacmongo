/* const http=require(`http`)
const fs=require("fs")


const indexpage=fs.readFileSync("index.html")
const aboutpage=fs.readFileSync("about.html")
const notfound=fs.readFileSync("404.html")



const hostname=`127.0.0.1`
const port=3000
const server=http.createServer((req,res)=> {
  if(req.url==="/")
  {
    return res.end(indexpage)

  }
  else if(req.url === "/about")
  {
    return res.end(aboutpage)

  }
  else {
    res.statusCode=404
    return res.end(notfound)

  }
})

server.listen(port,hostname,()=>{
    console.log(`serverı bu şekilde çalıştırabilirsin http://${hostname}:${port}`)
}) */
import path from 'path';
import express from 'express';

const app = express()
const port = 3000
const hostname = `127.0.0.1`
app.use(express.static('public'))
import { engine } from 'express-handlebars';

import mongoose from 'mongoose';
import bodyParser from 'body-parser';

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())






// MongoDB bağlantısı
mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})






app.engine('handlebars', engine());
app.set('view engine', 'handlebars');


import router from './router/router.js';
import posts from './models/posts.js';


const main=router;
app.use('/',main);






app.listen(port, () => {
  console.log(`Example app listening on port  http://${hostname}:${port}`)
})