import express from 'express';
const router=express.Router();


    router.get('/posts/new', (req, res) => {
      res.render("site/addpost")
     
     });
     router.post('/posts/test', (req, res) => {
      console.log(req.body);
      res.redirect("/")
     
     });
    





    
export default router;
   
   
   
   
   