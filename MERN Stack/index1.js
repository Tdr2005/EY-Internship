const express = require('express');
const { default: mongoose } = require('mongoose');
const Mobilemodel = require('./models/Mobilemodel');
const app = express()
app.use(express.json())
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/addmobile', async(req, res) => {
  try{
    const newdata = new Mobilemodel(req.body);
    await newdata.save();
    console.log(req.body);
    res.send('Data Saved successfully');
  }
  catch(err){
    console.log('Data not saved');
  }
})

app.get('/getmobile', async(req, res) => {
  try{
    const newdata2 = await Mobilemodel.find({});
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