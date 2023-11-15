import express from 'express';
const router=express.Router();
import post from '../models/post.js';


    router.get('/new', (req, res) => {
      res.render("site/addpost")
     
     });
     router.post('/test', (req, res) => {
      post.create(req.body)
      res.redirect("/")
     
     });
    
    
export default router;
   
   
   
   
   