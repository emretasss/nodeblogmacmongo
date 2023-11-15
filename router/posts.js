import express from 'express';
const router=express.Router();



    router.get('/new', (req, res) => {
      res.render("site/addpost")
     
     });
     router.post('/test', (req, res) => {
      console.log(req.body);
      res.redirect("/")
     
     });
    
    
export default router;
   
   
   
   
   