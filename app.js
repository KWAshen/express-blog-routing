const express = require('express');

const app = express();

const port = 3000;

app.use(express.static("immagini_e_post"));

app.get('/', (req,res) =>{
  res.send(("Benvenuti"));
})

app.listen(port,()=>{
  console.log(`Server is running on http://localhost:${port}`);
})