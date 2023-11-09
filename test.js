import mongoose from 'mongoose';
import Post from './models/post.js';

// MongoDB bağlantısı
mongoose.connect('mongodb://127.0.0.1/nodeblog_test_db', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
    
    // Post oluşturma
    return Post.create({
      title: "First Post",
      content: "This is my first blog post!"
    });
  })
  .then((post) => {
    console.log("BlogPost created successfully:", post);
  })
  .catch((error) => {
    console.error('Error Creating BlogPost:', error);
  });

   

  
  