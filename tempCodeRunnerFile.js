  app.post('/online_course', (req, res)=>{
    
    console.log(req.body);
    var Data = new Comment(req.body);
 
    Data.save().then(()=>{
    res.send('This item has been saved to the database');
    }).catch(()=>{
    res.status(400).send('item was not saved to the database')
})
  })