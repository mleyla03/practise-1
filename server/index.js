const express = require('express')
const app = express()
const port = 3000
const boyParser= require('body-parser')
const cors =require('cors')
const mongoose = require('mongoose');
app.use(boyParser.json())
app.use(cors())







app.get('/api', (req, res) => {
    res.send('Hello World!')
  })
const NewModel=new mongoose.Schema({
    names:String,
    title:String,
    like:Number,
    comment:Number,
    imageURL:String,
    texts:String
})
const Partone=new mongoose.model('Partone',NewModel)
  
app.get("/api/ports", async(req,res)=>{
    const{names}=req.query
    const practic = await Partone.find();
    if (!names) {
      res.status(200).send(practic);
    } else {
      const searched = practic.filter((x) =>
        x.names.toLowerCase().trim().includes(names.toLowerCase().trim())
      );
      res.status(200).send(searched);
    }
})
app.get("/api/ports/:id",async(req,res)=>{
    const id =req.params.id
    const alls= await new Partone.findById(id)
    res.send(alls)
})
 
  app.post("/api/ports",async(req,res)=>{
     const{names,title,like,comment,imageURL,texts}= req.body
     const Old =new Partone({
        names:names,
        title:title,
        like:like,
        comment:comment,
        imageURL:imageURL,
        texts:texts
     })
     await Old.save()
     res.send(Old)

  })
  app.delete("/api/ports/:id",async(req,res)=>{
    const id=req.params.id
    const deleted = await Partone.findByIdAndDelete(id);
   
    res.send(deleted)
 })
  
 app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  mongoose.connect('mongodb+srv://mleyla:lyla2003@authors.08rrrds.mongodb.net/?retryWrites=true&w=majority').then(() => {
    console.log("Mongo DB connected!");
  })