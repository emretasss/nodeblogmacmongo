import express from 'express';
const router=express.Router();



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
   
   
   
   
   