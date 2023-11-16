import express from 'express';
const router=express.Router();


import post from '../models/post.js';
router.get('/', (req, res) => {
    res.render("site/index")
   
   });   
   router .get('/about', (req, res) => {
     res.render("site/about")
    
    }); 
    router.get('/login', (req, res) => {
     res.render("site/login")
    
    });
    router.get('/register', (req, res) => {
     res.render("site/register")
    
    });      
    router.get('/blog', (req, res) => {
      
      const posts = post.find({}).then(posts=>{

        res.render("site/blog",{posts:posts});

        })
        

    
    });
    router.get('/contact', (req, res) => {
     res.render("site/contact")
    
    });
    router.get('/blog-single', (req, res) => {
     res.render("site/blog-single")
    
    });    
export default router;
   
   
   
   
   