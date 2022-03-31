const express=require("express");
const app =express();
const path=require("path");
const fs=require('fs');
const bodyParser=require('body-parser');
const mongoose = require('mongoose');
var mongodb =require("mongodb");

let port=80;

// var bodyParser = require('body-parser');
// app.use(express.json());
// app.use(express.static(path.resolve(__dirname, 'views')));
// app.use(express.urlencoded({extended:false}));

// app.use(express.urlencoded({ extended: true }))





app.use('/static', express.static('dancestat'));//for serving static files

app.use('/dancestat', express.static('dancestat'));
//data to save

app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug')//set template engine

app.set('views', path.join(__dirname,'views'));//set view directory

app.get('/', function (req, res) {
    const con='abra ka dabra';
    res.status(200).render('home.pug');
  })

  app.get('/home', function (req, res) {
    
    res.status(200).render('home.pug');
  })

  app.get('/about', function (req, res) {
   
    res.status(200).render('about.pug');
  })

  app.get('/class_info', function (req, res) {
    
    res.status(200).render('class_info.pug');
  })

  
  app.get('/online_course', function (req, res) {
    
    res.status(200).render('online_course.pug');
  })

//connecting mongoose

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/dance_academy');
}


var contactSchema = new mongoose.Schema({
  name: String,
  phone_number: String,
  email: String,
  address: String,
  concern: String,

});


var commentSchema=new mongoose.Schema({
  comment:String,
});
  
var Comment=mongoose.model('Comment',commentSchema);

var Contact = mongoose.model('Contact', contactSchema);



  app.get('/contact', function (req, res) {
    res.status(200).render('contact.pug');
  })

  app.post('/contact', (req, res)=>{
    
    console.log(req.body);
    var myData = new Contact(req.body);
 
    myData.save().then(()=>{
    res.send('This item has been saved to the database');
    }).catch(()=>{
    res.status(400).send('item was not saved to the database')
})
  })

  app.post('/online_course', (req, res)=>{
    
    console.log(req.body);
    var Data = new Comment(req.body);
 
    Data.save().then(()=>{
    // res.send("hurray");
    }).catch(()=>{
    res.status(400).send('sorry for inconvinence');
})
  })




  app.listen(port,()=>{
    console.log(`app run successfully on ${port}`);
})

var hello=(ele)=>{
  console.log("good morning");
}