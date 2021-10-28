const express = require('express')
const mongoose = require('mongoose')
const app = express()
const port = 3000
const cors = require('cors')
const User = require('./model/usermodel')


app.use(express.json())
app.use(cors());
mongoose.connect('mongodb://localhost:27017/GameStock').then(()=>{console.log("Connected to mongoose")})

app.post("/create",(req,res)=>{
User.create(req.body).then(()=>{
  console.log("database created succesfully")
})
})

app.get('/post',(req,res)=>{
User.collection('postDB').find({}).toArray((err,result)=>{
  if(err) throw err
  res.send(result)
})
})


app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`)
})