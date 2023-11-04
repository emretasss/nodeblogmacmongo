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



app.engine('handlebars', engine());
app.set('view engine', 'handlebars');







app.get('/', (req, res) => {
 res.render("site/index")

});



app.get('/about', (req, res) => {
  res.render("site/about")
 
 });
 
 

 app.get('/login', (req, res) => {
  res.render("site/login")
 
 });
 app.get('/register', (req, res) => {
  res.render("site/register")
 
 });


 app.get('/blog', (req, res) => {
  res.render("site/blog")
 
 });
 app.get('/contact', (req, res) => {
  res.render("site/contact")
 
 });
 app.get('/blog-single', (req, res) => {
  res.render("site/blog-single")
 
 });









app.listen(port, () => {
  console.log(`Example app listening on port  http://${hostname}:${port}`)
})