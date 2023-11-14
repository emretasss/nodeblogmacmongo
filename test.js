import mongoose from 'mongoose';
import Post from './models/posts.js';

// MongoDB bağlantısı
mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})


//create --------------------------------------
  // .then(() => {
  //   console.log('Connected to MongoDB');
    
  //   // Post oluşturma
  //   return Post.create({
  //     title: "HİJJŞAAt",
  //     content: "This is my first blog post!"
  //   });
  // })
  // .then((post) => {
  //   console.log("BlogPost created successfully:", post);
  // })
  // .catch((error) => {
  //   console.error('Error Creating BlogPost:', error);
  // });



  // select find
  // .then(() => {
  //   console.log('Connected to MongoDB');
    
  //   // Post oluşturma
  //   return Post.find({
     
  //     title:"HİJJŞAAt"
  //   });
  // })
  // .then((post) => {
  //   console.log("BlogPost created successfully:", post);
  // })
  // .catch((error) => {
  //   console.error('Error Creating BlogPost:', error);
  // });

  .then(() => {
    console.log('Connected to MongoDB');
    
    // Post oluşturma
    return Post.findByIdAndDelete(("654e693489a6ecd56108ccdb"),{
    
    });
  })
  .then((post) => {
    console.log("BlogPost created successfully:", post);
  })
  .catch((error) => {
    console.error('Error Creating BlogPost:', error);
  });

  