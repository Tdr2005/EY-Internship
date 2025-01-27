const express = require('express');
const { default: mongoose } = require('mongoose');
const Moviemodel = require('./models/Moviemodel');
const app = express()
app.use(express.json())
const cors = require('cors')
app.use(cors())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addmovie', async(req, res) => {
  try{
    const newdata = new Moviemodel(req.body);
    await newdata.save();
    console.log(req.body);
    res.send('Data Saved successfully');
  }
  catch(err){
    console.log('Data not saved');
  }
})

app.get('/getmovie', async(req, res) => {
  try{
    const newdata2 = await Moviemodel.find({});
    res.json(newdata2);
    console.log(newdata2);
  }
  catch(err){
    console.log('Data not saved');
  }
})

mongoose.connect("mongodb+srv://tarun:Tarun2005@cluster0.8iqzj.mongodb.net/").then(()=>
console.log("MongoDB Database Connected Succesfully"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})