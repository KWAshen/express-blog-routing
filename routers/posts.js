const express = require('express');

const router = express.router();

router.get('/',(req,res)=>{
  res.send('i posts');
});

router.get('/:id',(req,res)=>{
  const id = req.params.id;
  res.send(`Post con id ${req.params.id}`);
});

router.post('/',(req,res)=> {  
  res.send('Post creato');
})

router.put('/:id',(req,res)=> {
  res.send(`Post con id ${req.params.id} aggiornato`);
})

router.patch('/:id',(req,res)=>{
  res.send(`Post con id ${req.params.id} parzialmente aggiornato`);
})

router.delete('/:id',(req,res)=>{
  const id = req.params.id;
  res.send(`Post con id ${id} eliminato`);
})