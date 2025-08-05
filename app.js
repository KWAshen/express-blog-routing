const express = require('express');

const app = express();

const port = 3000;

const postsrouter = require('./routers/posts');

app.use('/posts',postsRouter);

app.use(express.static("immagini_e_post"));

app.get('/', (req,res) =>{
  res.send(("Benvenuti"));
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})